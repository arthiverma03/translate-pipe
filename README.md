
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">
    <img src="/assets/trav_1797+w.gif" alt="logo">
  </a>
  <div class="navfloat">
    <a class="a" href="" routerLink="/create-new" role="button">Add New</a>|
    <a class="a" href="" routerLink="/trigger" role="button">Hive Validation</a> |
    <a class="a" href="" routerLink="/schemasyncup" role="button">Hive SyncUp</a>| 
    <a class="a" href="" routerLink="/hivedatabase" role="button">Data Copy</a> |
    <a class="a" href="" routerLink="/targethdfs" role="button">Data Validation</a> |
    <a class="a" href="" routerLink="/search" role="button">Status</a> 
  </div>
</nav>

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

3rd

<div id="page">
    <app-navbar [title]="title"></app-navbar>
<div class="container">
    <h3 class="highvalidation">Hive Validation</h3>
  <form [formGroup]="bookForm" (ngSubmit)="onSubmit(bookForm)" novalidate>
    <div class="form-group">
      <label for="src_env">Source Environment</label>
      <select formControlName="src_env" class="form-control">
      
        <option value="{{count}}" *ngFor="let count of key; let i = index;">{{count}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="tgt_env">Target Environment</label>
      <select formControlName="tgt_env" class="form-control">
        
        <option value="{{count}}" *ngFor="let count of key; let i = index;">{{count}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="app_id">Application Name</label>
      <select formControlName="app_id" class="form-control"  (change)="onSelectcity($event)">
        
        <option value="{{counts}}" *ngFor="let counts of apikey; let i = index;">{{counts}}</option>           
      </select>
    </div>
    <div class="form-group">
        <label for="src_hive"> Source Parameter</label>
        <select formControlName="src_hive" class="form-control">
            <option>select</option>
          <option value="{{counts}}"  *ngFor="let counts of bookcount; let i = index;">{{counts}}</option>
 
        </select>
      </div>
      <div class="form-group">
          <label for="tgt_hive"> Target Parameter</label>
          <select formControlName="tgt_hive" class="form-control">
              <option>select</option> 
            <option value="{{counts}}" *ngFor="let counts of bookcount; let i = index;">{{counts}}</option>
     
          </select>
        </div>
        <div class="form-group">
            <input formControlName="trk_id"  type="hidden" [ngModel]= "parentMessage">
          </div>
        
          <div class="form-group">
              <input formControlName="data_type"  type="hidden" [ngModel]= "data_type">
            </div>
            <div class="form-group">
                <input formControlName="user_name"  type="hidden" [ngModel]= "user_name">
              </div>
          
    <div class="form-group">
      <input type="submit" class="btn btn-success" (click)="showDialog = !showDialog"  [disabled]="!bookForm.valid" value="Submit">
      
    </div>
  </form>
</div>
</div>
<app-dialog [(visible)]="showDialog"      [childMessage]="parentMessage">
    <h1 class="position">Request Submitted Successfully</h1>
    <h1 class="position">Your tracking id:{{parentMessage}}</h1>
    <a class = "btn displaybutton"routerLink="/search" routerLinkActive="active">Status</a>
  </app-dialog>
.btn-success, .btn-success[disabled]:hover{
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
}

.highvalidation{
    color: #337ab7;
}
.position{
    
    font-size: 20px;
    padding-left: 100px;
}
.displaybutton{
    display: flex;
    justify-content: center;
    margin: auto;
    width: 30%;
    border-radius: 10px;
    border: none;
    padding: 10px 20px;
    color: aliceblue;
    background-color: #337ab7;
    text-align: center;
}


import { Component, OnInit, Output, EventEmitter, Input, ErrorHandler  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TriggerData, Books } from '../trigger';
import { ServiceapiService } from '../serviceapi.service'
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-trigger-form',
  templateUrl: './triggerhdfs.component.html',
  styleUrls: ['./triggerhdfs.component.css']
})
export class TriggerhdfsComponent implements OnInit {
  title = "trigger"
  public readonly maxBookCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public bookForm: FormGroup;
  smartphone: any = [];
  showDialog: any;
  anys: any = [];
  key: any;
  apikey: any;
  @Input()
  book: Books;
  data: Books
  @Output()
  apidata: any;
  model: Books;
  data_type = "Hive_Validation";
  parentMessage = Math.floor(Math.random() * (999999 - 100000)) + 100000
  user_name = localStorage.getItem('dataSource')
  

  constructor(private api: ServiceapiService,
    private router: Router,private location: Location) {
    
  }

  ngOnInit() {
    this.initFormGroup();
    this.api.getSmart().subscribe(data => {
      this.key = Object.keys(data);
      console.log(this.key);
      
    })
    this.api.getlocalenvurl().subscribe(data => {
      this.apikey = Object.keys(data)
      console.log(this.apikey);
      this.apidata = data;

    })

  }

  bookcount = [];
  onSelectcity(event) {
    let selectedvalue = event.target.value;
    setTimeout(() => {
      if (this.apidata[selectedvalue].hive_db) {
        this.bookcount = this.apidata[selectedvalue].hive_db;
      }
      else {
        this.bookcount = [];
      }
    },0 )
  }

  onSubmit(bookForm) {
    this.model = {
      src_env: this.bookForm.controls['src_env'].value,
      tgt_env: this.bookForm.controls['tgt_env'].value,
      app_id: this.bookForm.controls['app_id'].value,
      src_hive: this.bookForm.controls['src_hive'].value,
      tgt_hive: this.bookForm.controls['tgt_hive'].value,
      trk_id: this.bookForm.controls['trk_id'].value,
      data_type: this.bookForm.controls['data_type'].value,
      user_name: this.bookForm.controls['user_name'].value
    }
    const myArrStr = JSON.stringify(this.model);
    
    this.api.createConfig(JSON.parse(myArrStr)).subscribe((data: {}) => {
      // this.pageRefresh()
      this.bookForm.reset();
      if (data) {
       
        this.bookForm.reset();

      }
      else {
        alert("please try to submit the form");
      }

    });
  }
  ngOnDestroy() {
    
    this.pageRefresh()
  
  }
  pageRefresh() {
    location.reload();
 }
  private initFormGroup(): void {
    const src_env = this.book && this.book.src_env ? this.book.src_env : '';
    const tgt_env = this.book && this.book.tgt_env ? this.book.tgt_env : '';
    const app_id = this.book && this.book.app_id ? this.book.app_id : '';
    const src_hive = this.book && this.book.src_hive ? this.book.src_hive : '';
    const tgt_hive = this.book && this.book.tgt_hive ? this.book.tgt_hive : '';
    const trk_id = this.book && this.book.trk_id ? this.book.trk_id : '';
    const data_type = this.book && this.book.data_type ? this.book.data_type : '';
    const user_name =this.book && this.book.user_name ? this.book.user_name : '';
    
    this.bookForm = new FormGroup({
      src_env: new FormControl(src_env, [Validators.required]),
      tgt_env: new FormControl(tgt_env, [Validators.required]),
      app_id: new FormControl(app_id, [Validators.required]),
      src_hive: new FormControl(src_hive, [Validators.required]),
      tgt_hive: new FormControl(tgt_hive, [Validators.required]),
      trk_id: new FormControl(trk_id, [Validators.required]),
      data_type: new FormControl(data_type, [Validators.required]),
      user_name: new FormControl(user_name, [Validators.required]),
      
      
    });
  }
  Hey(){
    this.router.navigate['/search'];
  }

  
}










................

  
  export interface Books {
    src_env: string;
    tgt_env: string;
    app_id: string;
    src_hive: string;
    tgt_hive: string;
    trk_id: string;
    data_type: string;
    user_name: string;
  }

api
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Books } from './trigger';

const httpOptions = {
  
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     
    
  })
};

  
@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {
	
  
   localUrl = 'http://10.47.80.4:5007/api/v1/getNewConf';
   localmergeappupdurl = 'http://10.47.80.4:5007/api/v2/getSource';
   localenvurl = 'http://10.47.80.4:5007/api/v1/getValues ';
   localsurl = "http://10.47.80.4:5007/api/v2/getVersions";
   syncup = "http://10.47.80.4:5007/api/v2/getsyncup"
   postsyncup = "http://10.47.80.4:5007/api/v2/getsyncupValues"
   datacopy = "http://10.47.80.4:5007/api/v2/getDataCopy"
   datavalidation = "http://10.47.80.4:5007/api/v2/getDataValidation"
   local = Math.floor(Math.random() * (999999 - 100000)) + 100000


constructor(private http: HttpClient) { }
private extractData(res: Response) {
  let body = res;
  return body || {};
}



getSmart() {
  return this.http.get(this.localsurl);
}

// getlocalmergeappupdurl(payload) {
//   console.log(payload);
//   return this.http.post(this.localenvurl, {...payload});
  
// }


getlocalenvurl() {
  return this.http.get(this.localmergeappupdurl);
}


getschema() {
  return this.http.get(this.syncup);
}

createConfig(json_string: string) {
  return this.http.post(this.localenvurl, json_string, httpOptions).pipe(
    map(this.extractData)
  );
}
schemasyncup(json_string: string) {
  return this.http.post(this.postsyncup, json_string, httpOptions).pipe(
    map(this.extractData)
  );
}
postdatacopy(json_string: string) {
  return this.http.post(this.datacopy, json_string, httpOptions).pipe(
    map(this.extractData)
  );
}
postdatavalidation(json_string: string) {
  return this.http.post(this.datacopy, json_string, httpOptions).pipe(
    map(this.extractData)
  );
}

addConfig(json_string: string) {
  return this.http.post(this.localUrl, json_string, httpOptions).pipe(
    map(this.extractData)
  );
}
}

