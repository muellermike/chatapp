import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ChatroomService {
    private actionUrl: string;

    constructor(private http: HttpClient){
        this.actionUrl = 'https://alpha-hsgchatapi.herokuapp.com/chatrooms';
        //this.actionUrl = 'http://localhost:3000/history';
        //this.actionUrl = 'http://hspapi.azurewebsite.net/history';
    }

    public addChatroom(room: string): Observable<string> {
        var options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        };

        return this.http.post<string>(this.actionUrl, room, options);
    }

    public getChatrooms(): Observable<string[]> {
        return this.http.get<string[]>(this.actionUrl);
    }

}