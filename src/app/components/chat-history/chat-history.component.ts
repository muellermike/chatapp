import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/components/shared/services/chat.service';
import { Message } from '../shared/Models/message';
import { Person } from '../shared/Models/person';
import { Chatroom } from '../shared/Models/room';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  public history: Message[] = [];
  public showTextElements: boolean;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    setInterval(() => {
      if(this.getChatroom()){
        this.getHistory();
      }
    }, 2000);
  }

  public getNickname() : string {
    return Person.Nickname;
  }

  public getChatroom() : string {
    return Chatroom.Roomname;
  }

  private getHistory(): void {
    this.chatService.getHistory(Chatroom.Roomname)
      .subscribe(response => {
        this.history = [];

        for(var h of response){
          this.history.push(new Message(h.nickname, h.message, new Date(h.date), h.chatroom));
        }
      });
  }
}