import { Routes } from '@angular/router';
import { SharedlayoutComponent } from './shared/layouts/sharedlayout/sharedlayout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BaseViewComponentComponent } from './features/home/components/base-view-component/base-view-component.component';
import { CustomersComponent } from './features/home/components/customers/customers.component';
import { InvoicesComponent } from './features/home/components/invoices/invoices.component';
import { ReportsComponent } from './features/home/components/reports/reports.component';
import { CompanyInfoComponent } from './features/home/components/company-info/company-info.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/auth/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '',
    component: SharedlayoutComponent,
    children: [
        { path: 'Home', component: BaseViewComponentComponent, canActivate: [AuthGuard] },
        { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
        { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard] },
        { path: 'companyInfo', component: CompanyInfoComponent, canActivate: [AuthGuard] },
        { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] }
    ],
  },
];
