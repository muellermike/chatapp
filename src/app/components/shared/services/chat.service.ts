import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../Models/message';

@Injectable()
export class ChatService {
    private actionUrl: string;

    constructor(private http: HttpClient){
        this.actionUrl = 'https://alpha-hsgchatapi.herokuapp.com/history';
        //this.actionUrl = 'http://localhost:3000/history';
        //this.actionUrl = 'http://hspapi.azurewebsite.net/history';
    }

    public addToHistory(message: Message): Observable<Message> {
        var options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        };

        return this.http.post<Message>(this.actionUrl, message, options);
    }

    public getHistory(): Observable<Message[]> {
        return this.http.get<Message[]>(this.actionUrl);
    }

}