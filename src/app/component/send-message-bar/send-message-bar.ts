import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-send-message-bar',
  imports: [MatButton, MatInput, MatFormField],
  templateUrl: './send-message-bar.html',
  styleUrl: './send-message-bar.css',
})
export class SendMessageBar {
}
