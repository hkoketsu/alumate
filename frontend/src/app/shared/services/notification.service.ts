import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../features/auth/services/token.service';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(
        private http: HttpClient,
        @Inject('BASE_API_URL') private baseUrl: string,
        private tokenService: TokenService,
      ) { }

    getNotifications () {
        return this.http.get(`${this.baseUrl}/notification`)
    }
}
