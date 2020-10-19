import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '../../services/local.service';
import { Router, ActivatedRoute } from '@angular/router';
import {UploadImgService} from "../../services/upload-img.service"
declare var require: any
const swal = require('sweetalert');

@Component({
  selector: 'app-create-local',
  templateUrl: './create-local.component.html',
  styleUrls: ['./create-local.component.css'],
  providers:[UploadImgService]
})
export class CreateLocalComponent implements OnInit {
  
    userForm: FormGroup
    public filesToUpload: Array<File>
  constructor(
    private formBuilder: FormBuilder,
    private userService: LocalService,
    private route: Router,
    private _uploadImgService: UploadImgService
    
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
      password: ['', Validators.required],
      image: ['', Validators.required],
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
            
            //subir imagen
             

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



  //funcion para subir imagen desde el crear local
  fileChangeEvent(fileInput: any){
    console.log(fileInput)
    this.filesToUpload= <Array<File>>fileInput.target.files;
  }

}
