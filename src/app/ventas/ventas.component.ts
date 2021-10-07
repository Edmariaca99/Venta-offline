import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';
import { ConnectionService } from 'ng-connection-service';  





@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})

export class VentasComponent {   
  
  hoy = moment();
  fecha= this.hoy.format('dd-MM-yyyy hh:mm:ss a');

    isConnected = true;  
    noInternetConnection: boolean | undefined;  
  
    constructor(private connectionService: ConnectionService) {  
      this.connectionService.monitor().subscribe(isConnected => {  
        this.isConnected = isConnected;  
        if (this.isConnected) {  
          this.noInternetConnection=false;  
        }  
        else {  
          this.noInternetConnection=true;  
        }  
      })  
    }  
    ngOnInit(): void { 
    }
  }  


