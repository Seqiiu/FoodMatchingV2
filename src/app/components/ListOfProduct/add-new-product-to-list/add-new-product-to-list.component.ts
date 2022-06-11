import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduktService } from 'src/app/Services/ListOfProduct/produkt.service';
import { Endpoint } from 'src/environments/environment';

@Component({
  selector: 'app-add-new-product-to-list',
  templateUrl: './add-new-product-to-list.component.html',
  styleUrls: ['./add-new-product-to-list.component.scss']
})
export class AddNewProductToListComponent implements OnInit {productForm: FormGroup

  constructor(public produktService: ProduktService,
              public fb: FormBuilder) {
    this.productForm = this.fb.group({
      name : ``,
      numerCV: '',
      iloscKAlori: '',
      wielkoscOpakowania: ''
    });
   }

  ngOnInit(): void {

  }

  endpoint = Endpoint;
  link = `${this.endpoint}api/Product/DownloadTheKodCV`;
  
  addNewProduct()
  {
    this.produktService.addNewProductToList(this.productForm.value);
  }
 
}