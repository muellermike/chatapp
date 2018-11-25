import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Person } from './components/shared/Models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatapp';

  public chatInput: string;
  public nickName: string;

  public onChatSent(value: string) : void {
    if(!this.chatInput){
      this.chatInput = '';
    }

    this.chatInput += value;
    // this.chatInput = value;
    // var dateTime = new Date();
    // this.chatInput += `${dateTime.toLocaleString()}\n${Person.Nickname}: ${value}\n`
  }
}
