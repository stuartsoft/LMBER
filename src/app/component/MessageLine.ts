import { Component, Input, signal } from "@angular/core";
import { MatListItem } from "@angular/material/list";

@Component({
  selector: 'MessageLine',
  template: '<mat-list-item>{{content}}</mat-list-item>',
  imports: [MatListItem]
})
export class MessageLine {
  @Input() content = ""
}
