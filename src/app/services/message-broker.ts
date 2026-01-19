import { inject, Injectable, signal } from '@angular/core';
import { OLMessage } from '../types/OLMessage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageBroker {
  httpClient = inject(HttpClient)
  public history = signal([] as OLMessage[])

  sendMessage(content: string){
    this.history.update(oldHistory => oldHistory.concat(new OLMessage(content, "User")))
    let requestData = {
      model: "gemma3",
      messages: this.history().map((message) => { return {role: message.from, content: message.content}}),
      stream: false
    }

    type ResponseShape =  {message: {content: string, role: string}}

    this.httpClient.post('http://localhost:11434/api/chat', requestData).subscribe(response => {

      let responseStuff = response as ResponseShape
      let responseMessage = new OLMessage(responseStuff.message.content, responseStuff.message.role)
      this.history.update(oldHistory => oldHistory.concat(responseMessage))
      console.log(this.history())
    })

  }
}
