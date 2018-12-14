import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Person } from '../shared/Models/person';
import { Chatroom } from '../shared/Models/room';
import { Message } from '../shared/Models/message';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
  public chatMessage: string;
  public sentMessage: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  public addMessage(msg: string): void {
    this.sentMessage = msg;
    
    if (Person.Nickname && Chatroom.Roomname) {
      var dateTime = new Date();
      var theMsg = new Message(Person.Nickname, msg, dateTime, Chatroom.Roomname);

      this.chatService.addToHistory(theMsg)
        .subscribe(response => {
          this.chatMessage = '';
        },
          (error: any) => {
            console.log(error);
        });
    } else if (!Person.Nickname) {
      alert('Bitte Nicknamen eingeben');
    } else {
      alert('Bitte wähle einen Chatraum aus.');
    }
  }

  public isNicknameSet() : boolean {
    if(!Person.Nickname){
      return false;
    } else{
      return true;
    }
  }

  public inAChatRoom() : boolean {
    if(!Chatroom.Roomname){
      return false;
    } else{
      return true;
    }
  }

}
