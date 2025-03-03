import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GenericService } from '../../../../shared/services/generic.service';

@Component({
  selector: 'app-base-view-component',
  imports: [],
  templateUrl: './base-view-component.component.html',
  styleUrl: './base-view-component.component.scss'
})
export class BaseViewComponentComponent {
  constructor(private route: ActivatedRoute, private genericService: GenericService,public router: Router) {}

  ngOnInit() {
    this.genericService.isQBConnected.subscribe(res=>{
       res ? '' :  this.route.queryParamMap.subscribe(params => {
        const code = params.get('code');
        const state = params.get('state');
        const realmId = params.get('realmId');
  
        if (code && state && realmId) {
          const apiUrl = `QuickBooks/callback?code=${code}&state=${state}&realmId=${realmId}`;
          this.genericService.getData(apiUrl).subscribe(response => {
            console.log('API Response:', response);
          });
        } else {
          console.error('Missing query parameters');
        }
      });
    })
  }


}
