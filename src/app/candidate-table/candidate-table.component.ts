import { Candidate, HomeWorld } from './candidate-table.model';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, mergeMap, Observable, Subject } from 'rxjs';
import { CandidateDetailsService } from '../../services/candidate-details.service';
import { ColDef } from 'ag-grid-community';
import * as moment from 'moment';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.scss'],
})
export class CandidateTableComponent {
  candidateData = new Array<Candidate>();
  selectedHomeWorld: HomeWorld = {
    name: '',
    diameter: 0,
    climate: '',
    population: 0
  };

  columnDefs: ColDef[] = [
    { field: 'name', sortable: true, filter: true },
    { field: 'height', sortable: true, filter: true },
    { field: 'mass', sortable: true, filter: true },
    {
      field: 'created',
      sortable: true,
      filter: true,
      cellRenderer: (data: any) => {
        return moment(data.created).format('DD/MM/YYYY HH:mm');
      },
    },
    {
      field: 'edited',
      sortable: true,
      filter: true,
      cellRenderer: (data: any) => {
        return moment(data.created).format('DD/MM/YYYY HH:mm');
      },
    },
    {
      field: 'homeworldName',
      sortable: true,
      filter: true,
      cellRenderer: (passedData: any) => {
        return passedData['data'].homeworldName;
      }
    },
  ];

  candidateDetails: Observable<Candidate[]> =
    this._candidateDetailsService.getCandidateDetails().pipe(map(data => {
      data.forEach(char => {
        this._candidateDetailsService.getCandidatePlanetName(char.homeworld).subscribe(result => {
          char.homeworldName = result.name;
        })
      });
      return data;
    }))

  constructor(private _candidateDetailsService: CandidateDetailsService) {}

  openPlanetDetails(event: any) {
    if(event.colDef.field !== 'homeworldName') return;

    this._candidateDetailsService.getCandidatePlanetName(event.data.homeworld).subscribe(data => {
      this.selectedHomeWorld = data;
    });

  }

}
