import { Injectable } from '@angular/core';
import { OLMessage } from '../types/OLMessage';

@Injectable({
  providedIn: 'root',
})
export class MessageBroker {
  public history : OLMessage[] = [
  ]


  sendMessage(content: string){
    this.history.push(new OLMessage(content, "User"))
  }
}
