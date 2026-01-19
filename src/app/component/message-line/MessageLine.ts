import { Component, Input, signal } from "@angular/core";
import { MatListItem } from "@angular/material/list";

@Component({
  selector: 'MessageLine',
  templateUrl: 'message-line.html',
  imports: [MatListItem]
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
