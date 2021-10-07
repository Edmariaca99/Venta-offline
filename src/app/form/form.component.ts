import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  documentoCtrl = new FormControl('', [Validators.required, Validators.maxLength(10),
    Validators.minLength(7)]);
  nameCtrl = new FormControl('', [Validators.required,
    Validators.minLength(4)]);
  apellidoCtrl = new FormControl('', [Validators.required,
    Validators.minLength(4)]);
  departamentoCtrl = new FormControl('', [Validators.required,
    Validators.minLength(4)]);
  ciudadCtrl = new FormControl('', [Validators.required,
    Validators.minLength(4)]);
  direccionCtrl = new FormControl('', [Validators.required, 
    Validators.minLength(4)]);        
  telefonoCtrl = new FormControl('', [Validators.required, Validators.maxLength(10),
    Validators.minLength(8)]); 
  emailCtrl = new FormControl('', [Validators.required,
  Validators.minLength(4)]);
  pagosCrtrl = new FormControl('', [Validators.required]);

    
  constructor() {
    

    this.emailCtrl.valueChanges
    .pipe(
    debounceTime(500))
.subscribe(value => {
  console.log(value);
});
   }

  ngOnInit(): void {
  }

  
  getData(event: Event) {
    event.preventDefault();
    console.log(
      this.documentoCtrl.value,
      this.nameCtrl.value,
      this.apellidoCtrl.value,
      this.departamentoCtrl.value,
      this.ciudadCtrl.value,
      this.direccionCtrl.value,
      this.telefonoCtrl.value,
      this.emailCtrl.value,
      this.pagosCrtrl
      );
  }

  
}
