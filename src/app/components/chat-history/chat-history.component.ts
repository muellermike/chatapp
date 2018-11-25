import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  @Input() history: string;
  
  @Input() addhistory(msg: string): void{
    alert(msg);
  }

  constructor() { }

  ngOnInit() {
  }

}
