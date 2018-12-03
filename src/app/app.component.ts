import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Message } from 'src/app/components/shared/Models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatapp';

  public chatInput: Message[] = [];
  public nickName: string;

  public onChatSent(value: Message) : void {
    // if(!this.chatInput){
    //   this.chatInput = new Message[5];
    // }

    this.chatInput.push(value);
  }
}
