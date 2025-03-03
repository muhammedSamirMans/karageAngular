import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    AvatarModule,
    MenuModule,
    DialogModule,
    CardModule,
    ButtonModule,
    CommonModule,
    TableModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // Menu Items for User Details
  userDetailsMenuItems: MenuItem[] = [];
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/Home',
    },
    {
      label: 'Company Info',
      icon: 'pi pi-user',
      routerLink: '/companyInfo',
    },
    {
      label: 'customers',
      icon: 'pi pi-search',
      routerLink: '/customers',
    },
    {
      label: 'invoices',
      icon: 'pi pi-search',
      routerLink: '/invoices',
    },
    {
      label: 'reports',
      icon: 'pi pi-search',
      routerLink: '/reports',
    }
  ];
  userInfoData: any = {};
  displayUserDetailsDialog: boolean = false;

  constructor(private genericService: GenericService) {}

  ngOnInit() { 
  }

  logout() {
    // Implement logout logic
  }
}