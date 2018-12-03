import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Person } from '../shared/Models/person';
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
    
    if (Person.Nickname) {
      var dateTime = new Date();
      var theMsg = new Message(Person.Nickname, msg, dateTime);

      this.chatService.addToHistory(theMsg)
        .subscribe(response => {
          this.chatMessage = '';
        },
          (error: any) => {
            console.log(error);
        });
    } else {
      alert('Bitte Nicknamen eingeben');
    }
  }

  public isNicknameSet() : boolean {
    if(!Person.Nickname){
      return false;
    } else{
      return true;
    }
  }

}
