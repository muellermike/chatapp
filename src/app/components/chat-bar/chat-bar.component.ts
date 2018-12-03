import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Person } from '../shared/Models/person';
import { Message } from '../shared/Models/message';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() chatHistory: EventEmitter<Message> = new EventEmitter();

  public chatMessage: string;
  public sentMessage: string;
  constructor() { }

  ngOnInit() {
  }

  public addMessage(msg: string): void {
    this.sentMessage = msg;
    
    var dateTime = new Date();
    var chatMsg = `${dateTime.toLocaleString()} ${Person.Nickname}:\n${msg}\n`
    var theMsg = new Message(Person.Nickname, msg, dateTime);

    this.chatHistory.emit(theMsg);

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
