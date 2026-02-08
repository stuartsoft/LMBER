import { inject, Injectable, signal } from '@angular/core';
import { OLMessage } from '../types/OLMessage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageBroker {
  httpClient = inject(HttpClient)
  public history = signal([] as OLMessage[])

  sendMessage(content: string) {
    this.history.update(oldHistory => oldHistory.concat(new OLMessage(content, "User")))
    let requestData = {
      model: "gemma3",
      messages: this.history().map((message) => { return { role: message.from, content: message.content } }),
      stream: true
    }

    type ResponseShape = { message: { content: string, role: string } }

    // this.httpClient.post('http://localhost:11434/api/chat', requestData).subscribe(response => {

    //   let responseStuff = response as ResponseShape
    //   let responseMessage = new OLMessage(responseStuff.message.content, responseStuff.message.role)
    //   this.history.update(oldHistory => oldHistory.concat(responseMessage))
    //   console.log(this.history())
    // })

    this.history.update(oldHistory => oldHistory.concat(new OLMessage("", "assistant")))
    fetch('http://localhost:11434/api/chat', { method: "POST", body: JSON.stringify(requestData) }).then(response => {
      let rs = response.body as ReadableStream
      let reader = rs.getReader()
      reader.read().then(rsrr => this.readReaderUntilDone(rsrr, reader))
    })
  }

  readReaderUntilDone(chunk: ReadableStreamReadResult<any>, reader: ReadableStreamDefaultReader) {
    if (chunk.done){
      return
    }
    let nextMessagePiece: { message: { role: string, content: string } } = this.hydrateChunk(chunk)
    this.history.update((oldHistory: OLMessage[]) => {
      let lastmessage = oldHistory[oldHistory.length - 1]
      lastmessage.content += nextMessagePiece.message.content
      return [...oldHistory]
    })
    reader.read().then(rsrr => this.readReaderUntilDone(rsrr, reader))

  }

  hydrateChunk(chunk: ReadableStreamReadResult<any>): any {
    return JSON.parse(new TextDecoder().decode(chunk.value))
  }
}
