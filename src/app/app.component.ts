import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface TableColumn {
  caption: string;
  field: string;
  config?: any;
}
export interface DataSource {
  sno: string;
  name: string;
  nationality: string;
  dob: string;
  gender: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ReusableDataTable';
  getTableData_periodicInfo$: any | undefined;
  getTableData_prsnldtls$: any | undefined;
  myColumns1: TableColumn[] = [
    { caption: 'Position', field: 'position' },
    { caption: 'Name', field: 'name' },
    { caption: 'Weight', field: 'weight' },
    // {
    //   caption: 'Date of Birth',
    //   field: 'dob',
    //   config: { isDate: 'true', format: 'dd/MM/YYYY' },
    // },
    { caption: 'Symbol', field: 'symbol' },
    {
      caption: 'Action',
      field: 'action',
      config: { isAction: 'true', actions: ['visibility', 'delete', 'edit'] },
    },
  ];
  myColumns2: TableColumn[] = [
    { caption: 'SNO', field: 'sno' },
    { caption: 'Name', field: 'name' },
    { caption: 'Nationality', field: 'nationality' },
    {
      caption: 'Date of Birth',
      field: 'dob',
      config: { isDate: 'true', format: 'dd/MM/YYYY' },
    },
    { caption: 'Gender', field: 'gender' },
    {
      caption: 'Action',
      field: 'action',
      config: { isAction: 'true', actions: ['visibility'] },
    },
  ];
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getTableData_periodicInfo();
    this.getTableData_prsnldtls();
  }
  getTableData_periodicInfo() {
    this.getTableData_periodicInfo$ = this.httpClient.get(
      '/assets/table_data1.json'
    );
    this.getTableData_periodicInfo$.subscribe({
      next: (response: any) => {
        this.getTableData_periodicInfo$ = response;
      },
    });
  }
  getTableData_prsnldtls() {
    this.getTableData_periodicInfo$ = this.httpClient.get(
      '/assets/table_data2.json'
    );
    this.getTableData_periodicInfo$.subscribe({
      next: (response: any) => {
        this.getTableData_prsnldtls$ = response;
      },
    });
  }

  onActionMatTable(event: any) {
    console.log('onAction Mat Table from Parent component', event);
    //Can either done with reusable-mat-table component or in parent component as per your convenience
    switch (event.action) {
      case 'visibility':
        //give statements
        break;
      case 'edit':
        //give statements
        break;
      case 'delete':
        //give statements
        break;
    }
  }
}
