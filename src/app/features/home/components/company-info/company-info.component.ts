import { Component } from '@angular/core';
import { GenericService } from '../../../../shared/services/generic.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-company-info',
  imports: [
      TableModule,
        ButtonModule,
        DialogModule,
        ToastModule,
        ProgressSpinnerModule
  ],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.scss',
   providers:[MessageService]
})
export class CompanyInfoComponent {
  companyData:any={}
  loading: boolean = false;
  constructor(private genericService:GenericService){}
  ngOnInit(){
    this.getcompanyData()
  }
  getcompanyData() {
    this.loading=true
    this.genericService.getData('QuickBooks/GetCompanyInfo-quickbooks').subscribe(res=> {
        this.companyData = res 
        this.loading=false     
    });
  }
}
