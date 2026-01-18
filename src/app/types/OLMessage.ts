export class OLMessage {
  content: string = "";
  from: string = "";


  constructor(content: string, from: string) {
    this.content = content;
    this.from = from
  }
}
