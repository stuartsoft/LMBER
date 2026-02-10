import { Component, inject, signal } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { SendMessageBar } from "./component/send-message-bar/send-message-bar";
import { MatList } from '@angular/material/list';
import { MessageLine } from './component/message-line/MessageLine';
import { MatOption, MatSelect } from '@angular/material/select';
import { MessageBroker } from './services/messageBroker/message-broker';
import { OllamaService } from './services/ollamaService/ollama-service';

@Component({
  selector: 'app-root',
  imports: [MessageLine, MatToolbar, MatToolbarRow, SendMessageBar, MatList, MatSelect, MatOption],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageBroker = inject(MessageBroker)
  ollamaService = inject(OllamaService)

}
