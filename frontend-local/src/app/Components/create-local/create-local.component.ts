import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '../../services/local.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var require: any
const swal = require('sweetalert');

@Component({
  selector: 'app-create-local',
  templateUrl: './create-local.component.html',
  styleUrls: ['./create-local.component.css']
})
export class CreateLocalComponent implements OnInit {
  userForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private userService: LocalService,
    private route: Router,
  ) {
    this.createValidator();
   }

  ngOnInit(): void {
  }

  createValidator(){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      clasificacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      sector: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      estado: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  /**
   * Función que permite conectarse al servicio para registrar un usuario.
   */
  registerUser(){
    if(this.userForm.valid){
      this.userService.createUser(this.userForm.value).subscribe(
        (createdUser) => {
          
          if(createdUser.message == "El correo ya existe"){
            swal('usuario ya existe', "", 'error');
          }else{
            swal('Registro Exítoso', "", 'success');
            this.route.navigate(['/login'])
          }
        },(error) => {
          console.log("error al registrar el usuario", error)
        }
      )
    }else{
      swal("Diligencia todos los campos", "", 'error');
    }
  }

}
