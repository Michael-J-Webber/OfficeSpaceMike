import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/app/enums/icons';
import { Router } from '@angular/router';
import { Office } from 'src/app/models/office_model';
import { OfficeService } from 'src/app/providers/office.service';

@Component({
  selector: 'app-office-list-page',
  templateUrl: './office-list-page.component.html',
  styleUrls: ['./office-list-page.component.scss']
})
export class OfficeListPageComponent implements OnInit {
  icons = Icon;
  offices : Office[] | undefined;

  constructor(public router: Router, private officeService: OfficeService) { }

  public navigate() {
    this.router.navigateByUrl('/add-office')
  }

  public ngOnInit(): void {
    this.officeService.offices.subscribe(value=>{
        this.offices = value;
    })
  }

}
