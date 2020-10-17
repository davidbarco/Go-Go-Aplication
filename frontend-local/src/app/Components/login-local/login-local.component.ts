import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router  } from '@angular/router';
declare var require: any
const swal = require('sweetalert');
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-login-local',
  templateUrl: './login-local.component.html',
  styleUrls: ['./login-local.component.css']
})
export class LoginLocalComponent implements OnInit {
  formLogin: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private userService: LocalService,
    private router: Router
  ) {
    this.validateForm();
   }

  ngOnInit(): void {
  }

  validateForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required] ],
    })
  }

  login(){
    if(this.formLogin.valid  ){
      this.userService.login(this.formLogin.value).subscribe(
        (userLogged) =>{
          this.userService.saveToken(userLogged['token']);
          
          this.router.navigate(['/local']);
          
        },(error) => {
          swal('Los datos no coinciden', "", 'error');
          console.log('Error ', error)
        }
      )
    }else{
      swal('Diligencia todos los campos', "", 'error');
    }
  }

}
