import { Component, Input, signal } from "@angular/core";

@Component({
  selector: 'MessageLine',
  template: '<li>{{content}}</li>'
})
export class MessageLine {
  @Input() content = "foo"
}
