import { Component, signal } from '@angular/core';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { OLMessage } from './types/OLMessage';
import { MessageLine } from './component/MessageLine';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatFormField, MatInput, MessageLine, MatToolbar, MatToolbarRow, MatButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LMBER');
  messageHistory : OLMessage[] = [new OLMessage("hi", "user"),  new OLMessage("yo", "assisstant")]
}
