import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { GenericService } from '../../../../shared/services/generic.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast'; 
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-customers',
  imports: [
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers:[MessageService],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  customers:any = [];
  newCustomer:any = { name: ''};
  displayForm = false;
  loading = false;
  constructor(private genericService:GenericService,private messageService: MessageService){}
  ngOnInit(){
    this.getData()
  }

  openForm() {
    this.newCustomer = { name: ''};
    this.displayForm = true;
  }

  addCustomer() {
    if(this.newCustomer.name!=''){
      this.genericService.postData('Customers/Create',this.newCustomer).subscribe((res:any)=>{
        this.displayForm = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Customer added successfully!' });
        this.getData()
      })
    }
   
  }

  getData(){
    this.loading = true;
    this.genericService.getData('Customers/GetAll').subscribe((res:any)=>{
      this.customers=res?.data
      this.loading = false;
    })
  }
}
