import { Component } from '@angular/core';
import { AppService } from './services/app.services'

interface Client {
  name: string,
  id: string | number,
  services?: Service[]
}
interface Service {
  name: string,
  id: string | number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public clients: Client[];
  public services: Service[];
  public panelOpenState = false;
  public client: Client

  constructor(private service: AppService) {
    this.getClients();
    this.service.getServicesList()
      .subscribe(res => {
        console.log('getServicesList', res)
        this.services = res;
      })
  }

  getClients() {
    this.service.getClientsList()
      .subscribe(res => {
        console.log('getClientsList', res)
        this.clients = res;
      })
  }

  getClient(id) {
    this.service.getClient(id)
      .subscribe(res => {
        console.log('getClient', res);
        this.client = res;
      })
  }

  compareFn(value1, value2) {
    return value1 === value2;
  }

  save() {
    this.service.updateClient(this.client)
      .subscribe(res => {
        console.log(res);
        this.getClients();
      })
  }

}
