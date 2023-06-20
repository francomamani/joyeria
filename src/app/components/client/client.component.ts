import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  client: Client;
  clients: Array<Client> = [];
  value: string = '';
  constructor() {
    this.client = {
      firstname: '',
      lastname: '',
      cellphone: '',
      type: 'regular',
      address: ''
    };
  }

  ngOnInit(): void {

  }

  reset():void {
    this.client = {
      firstname: '',
      lastname: '',
      cellphone: '',
      type: 'regular',
      address: ''
    };
  }

  add(client: Client): void {
    this.clients.push(client);
    this.clients.sort((a, b) => a.firstname.localeCompare(b.firstname));
    this.reset();
  }

  search(value: string): void {
    const foundClients = this.clients.filter((client) => client.firstname.toLowerCase().includes(value.toLowerCase()));
    console.table(foundClients);
  }

}
