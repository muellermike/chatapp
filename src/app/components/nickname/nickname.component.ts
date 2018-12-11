import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/Models/person';
import { ChatroomService } from 'src/app/components/shared/services/chatroom.service';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  public name: string;
  public nameSent: string;
  public chatrooms: string[];

  constructor(private chatroomService: ChatroomService) { }

  ngOnInit() {
    this.getChatrooms();
  }

  public sendNickname(name: string): void {
    this.nameSent = name;

    Person.Nickname = name;
  }

  private getChatrooms(): void {
    this.chatroomService.getChatrooms()
      .subscribe(response => {
        this.chatrooms = [];

        for(var cr of response){
          this.chatrooms.push(cr);
        }
      });
  }
}
