import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Endpoint } from 'src/environments/environment';
import { AnyForUntypedForms } from '@angular/forms';
import { ProduktService, Produkt } from '../../../Services/ListOfProduct/produkt.service';

@Component({
  selector: 'app-my-list-food',
  templateUrl: './my-list-food.component.html',
  styleUrls: ['./my-list-food.component.scss']
})
export class MyListFoodComponent implements OnInit {
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  endpoint = Endpoint;
  api = `${this.endpoint}api/Product`;
  fileUploadService: any;
  dashboardService: any;


    

  constructor(public produktService: ProduktService) {}

  produktList: any;

  ngOnInit(): void {
    //this.produktList = this.produktService.getListProdukt();
    this.getListfood()
    
  }
  getListfood(): void
  {
    this.produktService.getListProdukt().subscribe(data =>{
      this.produktList = data;
    });
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  
  file!: File;

  upload() {
    if (this.file) {
      this.produktService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

  produkt : Produkt ={
    name : "",
    numerCV:"",
    iloscKAlori:0,
    wielkoscOpakowania:""};
 





  
}

interface przepis{
  id: number;
  name: string,
  ilosc:number
}



