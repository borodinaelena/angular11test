import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface Client {
    name: string,
    id: string | number,
    services?: Service[]
}
interface Service {
    name: string,
    id: string | number
}

@Injectable({
    providedIn: 'root'
})

export abstract class AppService {

    private url = "http://161.97.131.248";
    constructor(
        protected httpClient: HttpClient,
    ) {
    }

    getClientsList(): Observable<Client[]> {
        return this.httpClient
            .get(
                `${this.url}/Clients/GetClients`
            ).pipe(
                map((data: Client[]) => {
                    return data;
                }), catchError(error => {
                    return throwError("Can't get clients list");
                })
            )
    }

    getClient(id): Observable<Client> {
        return this.httpClient
            .get(
                `${this.url}/Clients/UpdateClient/?id=${id}`
            ).pipe(
                map((data: Client) => {
                    return data;
                }), catchError(error => {
                    return throwError("Can't get client");
                })
            )
    }

    getServicesList(): Observable<Service[]> {
        return this.httpClient
            .get(
                `${this.url}/Services/GetServices`
            ).pipe(
                map((data: Service[]) => {
                    return data;
                }), catchError(error => {
                    return throwError("Can't get service list");
                })
            )
    }

    updateClient(data): Observable<Client> {
        return this.httpClient
            .post(
                `${this.url}/Clients/UpdateClient`,
                data
            ).pipe(
                map((data: Client) => {
                    return data;
                }), catchError(error => {
                    return throwError("Can't update client");
                })
            )
    }


}