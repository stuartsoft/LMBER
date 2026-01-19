import { Injectable } from '@angular/core';
import { OLMessage } from '../types/OLMessage';

@Injectable({
  providedIn: 'root',
})
export class MessageBroker {
  public history : OLMessage[] = [
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
    new OLMessage("hi", "User"),
    new OLMessage("yooo", "assisstant"),
  ]


  sendMessage(content: string){
    this.history.push(new OLMessage(content, "User"))
  }
}
