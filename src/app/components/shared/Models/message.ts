import { getLocaleDateTimeFormat } from '@angular/common';

export class Message{
    public message: string;
    public nickname: string;
    public date: Date;

    constructor(nickname: string, message: string, date: Date){
        this.nickname = nickname;
        this.message = message;
        this.date = date;
    }
    
    public getFullText(): string {
        return `${this.date.toLocaleString()} ${this.nickname}: ${this.message}`;
    }
}