import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../app.component';

@Component({
  selector: 'app-reusable-mat-table',
  templateUrl: './reusable-mat-table.component.html',
  styleUrls: ['./reusable-mat-table.component.css'],
})
export class ReusableMatTableComponent implements OnInit {
  @Input() columnName: TableColumn[] =[];
  @Input() dataSource: any;
  @Output() OnAction: EventEmitter<any> = new EventEmitter<any>();
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
    this.OnAction.emit({ action, element });
    console.log(action);
  }
}
