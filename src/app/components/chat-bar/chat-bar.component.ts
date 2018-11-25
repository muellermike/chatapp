import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Person } from '../shared/Models/person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() chatHistory: EventEmitter<string> = new EventEmitter();

  public chatMessage: string;
  public sentMessage: string;
  constructor() { }

  ngOnInit() {
  }

  public addMessage(msg: string): void {
    this.sentMessage = msg;
    
    var dateTime = new Date();
    var chatMsg = `${dateTime.toLocaleString()}\n${Person.Nickname}: ${msg}\n`

    this.chatHistory.emit(chatMsg);
    this.chatMessage = '';
  }

  public isNicknameSet() : boolean {
    if(!Person.Nickname){
      return false;
    } else{
      return true;
    }
  }

}
