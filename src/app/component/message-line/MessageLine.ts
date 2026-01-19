import { Component, Input } from "@angular/core";
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'MessageLine',
  styleUrl: 'message-line.css',
  templateUrl: 'message-line.html',
  imports: [MatCard, MatCardContent]
})
export class MessageLine {
  @Input() content = ""
  @Input() from = ""


  styleBySender = () => {
    if (this.from == 'User'){
      return 'text-align: right;'
    }
    return 'text-align: left;'
  }

}
