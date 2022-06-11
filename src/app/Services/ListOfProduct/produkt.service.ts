import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/environments/environment';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduktService {

  constructor(private httpClient : HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
  headers2 = new HttpHeaders().set('Content-Type', 'application/json');
  endpoint = Endpoint;
  link = `${this.endpoint}api/Product`;


  getListProdukt(){
    return this.httpClient.get(this.link, { headers: this.headers });
  }
  
  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post('https://localhost:44346/api/Product/DownloadThePhoto', formParams,{ headers: this.headers })
  }

  addNewProductToList(produkt : Produkt){

    return this.httpClient.post(`${this.link}/GetNewProduct`,produkt,{ headers: this.headers2 } )
    .subscribe((res:any) =>{
      return res;
     
     });
  }


  addNewProduktByKey(kod : string) : any
  {

    return this.httpClient.post<any>(`${this.link}/DownloadTheKodCV`,kod,{ headers: this.headers2 } )
    .subscribe((res:any) =>{
     return res;
    
    });

  }


}

export interface Produkt{
  name : string
  numerCV:string,
  iloscKAlori:number,
  wielkoscOpakowania:string
}
