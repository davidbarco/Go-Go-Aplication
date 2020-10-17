import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';



@Component({
  selector: 'app-local-admin',
  templateUrl: './local-admin.component.html',
  styleUrls: ['./local-admin.component.css']
})
export class LocalAdminComponent implements OnInit {
  /* nombreLocal
  apiURL
  estado
  image */


  constructor(
    /* private localService: LocalService */
  ) {
    /* this.apiURL= this.localService.apiURL
    this.nombreLocal = localStorage.getItem('')
    this.estado= localStorage.getItem('')
    this.image= localStorage.getItem('') */
   }

  ngOnInit(): void {
    
  }

}
