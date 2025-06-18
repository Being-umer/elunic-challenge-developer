import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginatedMessages, UserMessage } from "../interfaces/user-message.interface";



@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private apiUrl = 'http://localhost:3000/api/user-messages';

    constructor(private http: HttpClient) {}

    getMessages(page: number): Observable<PaginatedMessages> {
        return this.http.get<PaginatedMessages>(`${this.apiUrl}?page=${page}`);
    }

    createMessage(username: string, message: string): Observable<UserMessage> {
        return this.http.post<UserMessage>(`${this.apiUrl}`, { username, message });
    }
    
    
}