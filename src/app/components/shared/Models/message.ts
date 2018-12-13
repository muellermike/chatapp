import { getLocaleDateTimeFormat } from '@angular/common';

export class Message{
    public message: string;
    public nickname: string;
    public date: Date;
    public chatroom: string;

    constructor(nickname: string, message: string, date: Date, chatroom: string){
        this.nickname = nickname;
        this.message = message;
        this.date = date;
        this.chatroom = chatroom;
    }
    
    public getFullText(): string {
        return `${this.date.toLocaleString()} ${this.nickname}: ${this.message}`;
    }
}