import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenericService } from '../../../../shared/services/generic.service';
import { CommonModule, DatePipe } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-invoices',
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    ToastModule,
    CalendarModule,
    ProgressSpinnerModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
  providers: [MessageService,DatePipe]
})
export class InvoicesComponent implements OnInit {
  invoices: any[] = [];
  invoiceForm: FormGroup =new FormGroup({});
  displayForm = false;
  loading:boolean=false

  constructor(
    private genericService: GenericService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {
    // ✅ Define Reactive Form
    this.invoiceForm = this.fb.group({
      customerRef: ['', Validators.required],
      totalAmount: [null, [Validators.required, Validators.min(0)]],
      itemRef: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.getInvoices();
  }

  openForm() {
    this.invoiceForm.reset(); //  Reset the form when opening
    this.displayForm = true;
  }

  addInvoice() {
    if (this.invoiceForm.valid) {
      this.genericService.postData('Invoices/Create', this.invoiceForm.value).subscribe((res: any) => {
        this.displayForm = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Invoice added successfully!' });
        this.getInvoices(); // Refresh the table
      });
    } else {
      this.invoiceForm.markAllAsTouched(); //  Show validation errors
    }
  }

  getInvoices() {
    this.loading=true
    this.genericService.getData('Invoices/GetAll').subscribe((res: any) => {
      this.invoices = res?.data || [];
      this.loading=false
    });
  }
}
