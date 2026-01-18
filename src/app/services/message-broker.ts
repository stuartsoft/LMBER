import { Injectable } from '@angular/core';
import { OLMessage } from '../types/OLMessage';

@Injectable({
  providedIn: 'root',
})
export class MessageBroker {
  public history : OLMessage[] = [new OLMessage("hi", "user"),  new OLMessage("yooo", "assisstant")]
}
