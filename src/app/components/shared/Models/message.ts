import { getLocaleDateTimeFormat } from '@angular/common';

export class Message{
    public message: string;
    public nickname: string;
    public date: Date;
    public chatroom: string;

    private options = { day: 'numeric', year: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric'};

    constructor(nickname: string, message: string, date: Date, chatroom: string){
        this.nickname = nickname;
        this.message = message;
        this.date = date;
        this.chatroom = chatroom;
    }
    
    // public getFullText(): string {
    //     return `${this.date.toLocaleString()} ${this.nickname}: ${this.message}`;
    // }

    public getDate(): string {
        return this.date.toLocaleDateString("de-CH", this.options);
    }
}