import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { MessageBroker } from '../../services/message-broker';

@Component({
  selector: 'app-send-message-bar',
  imports: [MatButton, MatInput, MatFormField, FormsModule],
  templateUrl: './send-message-bar.html',
  styleUrl: './send-message-bar.css',
})
export class SendMessageBar {
  private messageBroker = inject(MessageBroker)
  draftMessage: string = ""

  sendMessage() {
    this.messageBroker.sendMessage(this.draftMessage)
    this.draftMessage = ""
  }
}
