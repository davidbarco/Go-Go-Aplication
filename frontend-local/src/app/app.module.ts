import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CreateLocalComponent } from './Components/create-local/create-local.component';
import { AuthGuard } from './guards/auth.guard';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginLocalComponent } from './Components/login-local/login-local.component';
import { LocalAdminComponent } from './Components/local-admin/local-admin.component';
import { MapsComponent } from './Components/maps/maps.component';
import { LocalIdComponent } from './Components/local-id/local-id.component';


const appRoutes: Routes = [
  { path: '', component: LoginLocalComponent },
  { path: 'registrarLocal',  component: CreateLocalComponent },
  { path: 'login',  component: LoginLocalComponent },
  { path: 'local',canActivate: [AuthGuard],  component: LocalAdminComponent },
  { path: 'localId/:id',canActivate: [AuthGuard],  component: LocalIdComponent },
  { path: 'maps', canActivate: [AuthGuard], component: MapsComponent },
  { path: '**', component: CreateLocalComponent }//Ruta para cuando no encontramos una página
]





@NgModule({
  declarations: [
    AppComponent,
    CreateLocalComponent,
    MenuComponent,
    LoginLocalComponent,
    LocalAdminComponent,
    MapsComponent,
    LocalIdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
