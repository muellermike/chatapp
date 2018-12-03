import { getLocaleDateTimeFormat } from '@angular/common';

export class Message{

    private _sender: string;
    private _text: string;
    private _date: Date;
    private _fullText: string;

    constructor(private sender: string, private text: string, private date: Date){
        this._text = text;
        this._sender = sender;
        this._date = date;
    }
    
    public get Sender() : string {
        return this._sender;
    }

    public set Nickname(value: string) {
        this._sender = value;
    }

    public get Text() : string {
        return this._text;
    }

    public set Text(value: string){
        this._text = value;
    }

    public get Date(): Date {
        return this._date;
    }

    public set Date(value: Date){
        this._date = value;
    }

    public getFullText(): string {
        return `${this._date.toLocaleString()} ${this._sender}:\n${this._text}\n`;
    }
}