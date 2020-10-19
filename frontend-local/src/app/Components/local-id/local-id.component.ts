import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import {Local} from "../../models/Local";
import {GLOBAL}from "../../services/global";
import {Router,ActivatedRoute,Params} from "@angular/router"

@Component({
  selector: 'app-local-id',
  templateUrl: './local-id.component.html',
  styleUrls: ['./local-id.component.css'],
  providers:[LocalService]
})
export class LocalIdComponent implements OnInit {
  public url: string;
  public local: Local;
  constructor(
    private _LocalService: LocalService,
    private _router:Router,
    private _route: ActivatedRoute
  ) {
    this.url= GLOBAL.url
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id= params.id;

      this.getProject(id);
    });
  }

  getProject(id){

    this._LocalService.getProject(id).subscribe(
      response =>{
          this.local = response.local;
      },
      error=>{
        console.log(<any>error)
      }
    )
    
  }

}
