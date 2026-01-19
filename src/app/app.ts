import { Component, inject } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MessageBroker } from './services/message-broker';
import { SendMessageBar } from "./component/send-message-bar/send-message-bar";
import { MatList } from '@angular/material/list';
import { MessageLine } from './component/message-line/MessageLine';

@Component({
  selector: 'app-root',
  imports: [MessageLine, MatToolbar, MatToolbarRow, SendMessageBar, MatList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageBroker = inject(MessageBroker)
}
