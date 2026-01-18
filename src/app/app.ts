import { Component, inject } from '@angular/core';
import { MessageLine } from './component/MessageLine';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MessageBroker } from './services/message-broker';
import { SendMessageBar } from "./component/send-message-bar/send-message-bar";

@Component({
  selector: 'app-root',
  imports: [MessageLine, MatToolbar, MatToolbarRow, SendMessageBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageBroker = inject(MessageBroker)
}
