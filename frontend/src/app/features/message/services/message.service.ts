import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../auth/services/token.service';
import { Message } from '../models/message.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Message[]
  private msgSubject = new Subject<any>();
  public msgSubject$ = this.msgSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string,
    private tokenService: TokenService,
  ) { }

  getMessagesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/message/`)
  };

  getMessages(id:number){
    return this.http.get(`${this.baseUrl}/message/user/${id}`)
  }

  postMessage(body:any) {
    return this.http.post<any>(`${this.baseUrl}/message/user/${body.receiver}`, body);
  };

  update(){
    this.msgSubject.next();
  }
}
