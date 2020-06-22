>
ng new my-app (Select css)
ng g c login
ng g c tableandgraph
ng g c sidenavigation

app.component.html
<div id="page">
  <!-- <app-navbar [title]="title"></app-navbar> -->
  <div id="main">
      <router-outlet></router-outlet>
  </div>
</div>

step4 app.module.js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableandgraphComponent } from './tableandgraph/tableandgraph.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {
    path: 'search',
    component: TableandgraphComponent,
    data: { title: 'tableandgraph' }
  },
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

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableandgraphComponent,
    SidenavigationComponent
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


step5
login html
<div id="page">
  
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

step 6 login js
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../login';


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
    private router: Router) { }
 
  ngOnInit() {
    this.initFormGroup();
  }

  
  public onSubmit({ value }: { value: Login }): void {
    value.id = this.login && this.login.id ? this.login.id : null;
    this.newBook.emit(value);
  this.router.navigate(['search'])
  console.log("aaaa", value)
  localStorage.setItem('dataSource', value.username);
  console.log(localStorage.getItem('dataSource'));
if((value.username == "admin") && (value.password == "admin")){
  this.newBook.emit(value);
  this.router.navigate(['search'])
} 
 else{
   alert("please use valid username & password")
 }
  
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


step7 login css
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

step 8 tableandgraph
table.html

<div id="page">
    <app-navbar [title]="title"></app-navbar>
    <div class="row">
        <!-- column -->
        <div class="col-lg-12">
            <div id="chartContainer" style="height: 370px; width: 100%; margin-left:auto;margin-right:auto;"></div>
        </div>
        <!-- column -->
    </div>
<div class="container">
  
        <h3 class="highvalidation">Results.</h3>
      <table class="table table-bordered table-sm">
          <thead class="thead-light"  >        
              <th scope="col" sortBy="trackid ">API</th>
              <th scope="col">Average/peak Time</th>
              <th scope="col" (click)="sort('action')">Pass / Fail / Total 
                  <span style = "padding-left: 35px;"class="glyphicon sort-icon" *ngIf="key =='name'" [ngClass]="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
              </th>
              <th scope="col"  (click)="sort('app_id')">% Pass
                  <span style = "padding-left: 10px;"class="glyphicon sort-icon" *ngIf="key =='name'" [ngClass]="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
              </th>
              <th scope="col">Run Pass / Fail / Total</th>         
              <th scope="col">Run % Pass</th>
                
            </thead>
            <tbody>
              <tr >
                <td >GEOGRAPHIC ADDRESS</td>  
                <td>0.16 / 0.16S</td>
               <td>65 / 0/ 65</td>
               <td>100%</td>
               <td>1 / 0/ 1</td> 
               <td>100%</td>
              </tr>
            </tbody>
      </table>
   
  </div>
  </div>  
  
  table.js
  import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/js/CanvasJS.min'
@Component({
  selector: 'app-tableandgraph',
  templateUrl: './tableandgraph.component.html',
  styleUrls: ['./tableandgraph.component.css']
})
export class TableandgraphComponent implements OnInit {
  ngOnInit() {
      let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
      
    chart.render();
      }
  }
  
  step9
  table.css
  .main {
    display: flex;
    height: 100%;
  }
  
  .inner {
    flex: 1;
  }
  
  form {
    background-color: #e9ecef;
    border-style: ridge;
    padding: 5px;
  }
  
  .list-group {
    border-style: ridge;
  }
  table {border-collapse:collapse; table-layout:fixed;   border: 1px solid black;}
  th, td {
   
    text-align: left;
    border-bottom: 2px solid #ddd;
  }
  tr.is-white {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6
  }
  tr.is-action{
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
  }
  tr.is-blue{
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }
  tr.is-red {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }
  tr.is-black{
    color: black;
    background-color: white;
    border-color: gainsboro;
  }
  .highvalidation{
    color: #337ab7;
  }
  
  .btn-success{
     background-color: #337ab7;
  }
  
  thead>tr>th {
    cursor: pointer;
  }
   
  table  td{
    word-wrap:break-word;
    font-size: 11px;
   
  }
  table  tr{
    word-wrap:break-word;
    font-size: 14px;
   
  }
  table .thead-light th {
    color: white;
    background-color:rgb(0, 123, 255);
    font-family: normal;
  }
  
  step10
  sidenavigation.html
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">
      <img src="/assets/trav_1797+w.gif" alt="logo">
    </a>
    <div class="navfloat">
      <a class="a" href="" routerLink="/create-new" role="button">Test List</a>|
      <a class="a" href="" routerLink="/trigger" role="button">History</a> |
      <a class="a" href="" routerLink="/schemasyncup" role="button">Config</a>| 
    </div>
  </nav>
  
  step11 sidenavigation.js
  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

step12
sidenavigation.css
.dropdown-toggle, .home-link {
    font-weight: bold;
}

.heading {
    border-radius: 25px;
    background-color: #e9ecef;
    padding: 3px 10px 3px 10px;
    text-align: center;
    margin-left: 15px;
}

.nav-right {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
}

.navbar-brand img {
    height: 30px;
}
.navfloat{
float: right;
margin-top: 30px;
padding-right: 10px;
}
.a{
    color: white;
    padding-right: 20px;
    padding-left: 20px;
   
}


step 13 app/asset/js/CanvasJS (add min canavs js file)
download angular canvas filehttps://canvasjs.com/download-html5-charting-graphing-library/

step14 create login.ts file under app/login.ts
export interface Login {
    id: string;
    username: string;
    password: string;
    
  }
  


