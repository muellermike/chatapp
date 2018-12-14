import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/Models/person';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  public name: string;
  public nameSent: string;

  constructor() { }

  ngOnInit() {
  }

  public sendNickname(name: string): void {
    this.nameSent = name;

    Person.Nickname = name;
  }
}
