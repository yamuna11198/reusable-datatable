import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../app.component';

@Component({
  selector: 'app-reusable-mat-table',
  templateUrl: './reusable-mat-table.component.html',
  styleUrls: ['./reusable-mat-table.component.css'],
})
export class ReusableMatTableComponent implements OnInit {
  @Input() columnName: TableColumn[] = [];
  @Input() dataSource: any;
  @Output() onAction: EventEmitter<any> = new EventEmitter<any>();
  public displayedColumns: string[] | undefined;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columnName.map(
      (tableColumn: TableColumn) => tableColumn.caption
    );
    console.log(this.displayedColumns);
  }
  setDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);
  }
  emitAction(action: string, element: any) {
    this.onAction.emit({ action, element });
    console.log(action);
    alert(action + ' is clicked'); // open in new tab to see this
    switch (action) {
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
