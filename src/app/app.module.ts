import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReusableMatTableComponent } from './reusable-mat-table/reusable-mat-table.component';

@NgModule({
  declarations: [AppComponent, ReusableMatTableComponent],
  imports: [BrowserModule,HttpClientModule, MatTableModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
