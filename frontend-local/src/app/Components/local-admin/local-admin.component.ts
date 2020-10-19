import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import {Local} from "../../models/Local";
import {GLOBAL}from "../../services/global"


@Component({
  selector: 'app-local-admin',
  templateUrl: './local-admin.component.html',
  styleUrls: ['./local-admin.component.css'],
  providers:[LocalService]
})
export class LocalAdminComponent implements OnInit {
  public locals: Local[];
  public url: string;



  constructor(
   private _LocalService: LocalService
  ) {
    this.url=GLOBAL.url
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._LocalService.getProjects().subscribe(
       response =>{
           if(response.locals){
             this.locals = response.locals;
           }

       },
       error=>{
         console.log(<any>error)
       }
    );
  }

  

}
