import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../auth/services/token.service';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string,
    private tokenService: TokenService,
  ) { }

  getMessageList() {
    return this.http.get(`${this.baseUrl}/message/`)
  };
  

}
