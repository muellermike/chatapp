import { Component, OnInit } from '@angular/core';
import { Chatroom } from '../shared/Models/room';
import { ChatroomService } from 'src/app/components/shared/services/chatroom.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  public chatrooms: string[];
  public selectedRoom: string;
  public newChatroom: string;

  constructor(private chatroomService: ChatroomService) { }

  ngOnInit() {
    this.getChatrooms();
  }

  public addChatroom(name: string) : void {
    if(this.chatrooms.indexOf(name) == -1){
      this.chatroomService.addChatroom(name)
        .subscribe(response => {
          this.getChatrooms();
        });
      this.newChatroom = '';
    } else {
      alert('Dieser Chatraum existiert bereits.');
    }
  }

  public setRoom(roomname: string) : void {
    Chatroom.Roomname = roomname;
    this.selectedRoom = Chatroom.Roomname;
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
