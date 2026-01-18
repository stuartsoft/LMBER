import { Component, signal } from '@angular/core';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { OLMessage } from './types/OLMessage';
import { MessageLine } from './component/MessageLine';

@Component({
  selector: 'app-root',
  imports: [MatFormField, MatInput, MessageLine],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LMBER');
  messageHistory : OLMessage[] = [new OLMessage("hi", "user"),  new OLMessage("yo", "assisstant")]
}
