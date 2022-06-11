import { stringify } from '@angular/compiler/src/util';
import { ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduktService } from 'src/app/Services/ListOfProduct/produkt.service';
import { Endpoint } from 'src/environments/environment';

@Component({
  selector: 'app-add-product-to-list',
  templateUrl: './add-product-to-list.component.html',
  styleUrls: ['./add-product-to-list.component.scss']
})
export class AddProductToListComponent implements OnInit {signinForm: FormGroup

  constructor(public produktService: ProduktService,
              public fb: FormBuilder) {
    this.signinForm = this.fb.group({
      kodCV: [''],
    });
   }

  ngOnInit(): void {

  }

  endpoint = Endpoint;
  link = `${this.endpoint}api/Product/DownloadTheKodCV`;
  
  k : string = "eas";

  addnewProduct()
  {

    this.k = this.produktService.addNewProduktByKey(this.signinForm.value);

  }

}
