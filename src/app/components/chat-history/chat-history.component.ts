import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/components/shared/services/chat.service';
import { Message } from '../shared/Models/message';
import { Person } from '../shared/Models/person';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  public history: Message[];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.getHistory();
    }, 2000);
  }

  public getNickname() : string {
    return Person.Nickname;
  }

  private getHistory(): void {
    this.chatService.getHistory()
      .subscribe(response => {
        this.history = [];

        for(var h of response){
          this.history.push(new Message(h.nickname, h.message, new Date(h.date)));
        }
      });
  }
}