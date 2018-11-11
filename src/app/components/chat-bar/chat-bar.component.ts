import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  public chatMessage: string;
  public sentMessage: string;
  constructor() { }

  ngOnInit() {
  }

  public addMessage(msg: string): void {
    this.sentMessage = msg;

    this.chatMessage = '';
  }

}
