import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export abstract class AppService {

    private url = "http://161.97.131.248";
    constructor(
        protected httpClient: HttpClient,
    ) {
    }

    getClientsList(): Observable<any> {
        return this.httpClient
            .get(
                `${this.url}/Clients/GetClients`
            )
    }

    getClient(id): Observable<any> {
        return this.httpClient
            .get(
                `${this.url}/Clients/UpdateClient/?id=${id}`
            )
    }

    getServicesList(): Observable<any> {
        return this.httpClient
            .get(
                `${this.url}/Services/GetServices`
            )
    }

    updateClient(data): Observable<any> {
        return this.httpClient
            .post(
                `${this.url}/Clients/UpdateClient`,
                data
            )
    }

    
}