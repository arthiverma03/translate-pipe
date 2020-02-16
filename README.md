import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddnewComponent } from './addnew/addnew.component';
import { TriggerhdfsComponent } from './triggerhdfs/triggerhdfs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
 import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './modal/modal.component';
import { HivedatabaseComponent } from './hivedatabase/hivedatabase.component';
import { TargethdfsComponent } from './targethdfs/targethdfs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HiveschemaComponent } from './hiveschema/hiveschema.component';

import { Ng2OrderModule } from 'ng2-order-pipe'; 
const appRoutes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' }
  },
 
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    data: { title: '404: Page Not Found' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddnewComponent,
    TriggerhdfsComponent,
    PagenotfoundComponent,
    DialogComponent,
    HivedatabaseComponent,
    TargethdfsComponent,
    HomeComponent,
    SearchcomponentComponent,
    HiveschemaComponent,
   
  
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
 
    
  ],

  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


2nd file

<div id="page">
    <app-home [title]="title"></app-home>
    <div class="container" style="margin-top: 250px;">
        <form [formGroup]="bookForm" (ngSubmit)="onSubmit(bookForm)" novalidate>
           
        <div class="form-group">
          <input type="text" autocomplete="off" placeholder="Username" id="username" formControlName="username">
        </div>
        <div class="form-group">
          <input type="password" autocomplete="off" placeholder="Password" id="password" formControlName="password">
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-success" [disabled]="!bookForm.valid" value="Submit">
          </div>
      
      </form>
    </div>
    
</div>
form {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 20px;
    background: #eee;
    border-radius: 20px;
}

input#username, input#password {
    outline: 0;
    font-size: 20px;
    padding: 5px 10px;
    margin: 5px;
    min-width: 300px;
}

button#submit {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
  
}
.btn-success, .btn-success[disabled]:hover{
    height: 35px;
    width: 100px;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
}


import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../login';
import { ServiceapiService } from '../serviceapi.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "login"
  public username = "admin";
  public  password = "password"

  public bookForm: FormGroup;
  @Input()
  login: Login;
  @Output()
  newBook: EventEmitter<Login> = new EventEmitter<Login>();
  constructor(
    private router: Router, private api: ServiceapiService) { }
 
  ngOnInit() {
    this.initFormGroup();
  }

  
  public onSubmit({ value }: { value: Login }): void {
    value.id = this.login && this.login.id ? this.login.id : null;
    this.newBook.emit(value);
  this.router.navigate(['trigger'])
  console.log("aaaa", value)
  localStorage.setItem('dataSource', value.username);
  console.log(localStorage.getItem('dataSource'));
// if((value.username == "admin") && (value.password == "admin")){
//   this.newBook.emit(value);
//   this.router.navigate(['trigger'])
// } 
//  else{
//    alert("please use valid username & password")
//  }
  
  }

  private initFormGroup(): void {
    const username = this.login && this.login.username ? this.login.username : '';
    const password = this.login && this.login.password ? this.login.password : '';
   

    this.bookForm = new FormGroup({
      username: new FormControl(username, [Validators.required]),
      password: new FormControl(password, [Validators.required]),
    
    });
  }
}




5th
export interface Login {
    id: string;
    username: string;
    password: string;
    
  }
  
