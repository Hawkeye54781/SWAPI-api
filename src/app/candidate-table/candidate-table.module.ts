import { CandidateTableRoutingModule } from './candidate-table-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateTableComponent } from './candidate-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,
    CandidateTableRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [CandidateTableComponent]
})
export class CandidateTableModule { }
