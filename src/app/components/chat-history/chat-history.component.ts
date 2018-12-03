import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../shared/Models/message';
import { Person } from '../shared/Models/person';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  @Input() history: Message[];

  ngOnInit() {
  }

  public getNickname() : string {
    
    return Person.Nickname;
  }
}