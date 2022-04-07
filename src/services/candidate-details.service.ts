import { Candidate, HomeWorld } from '../app/candidate-table/candidate-table.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  map,
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//not actually a api service, but a service that handles the storage of the candidate-table
export class CandidateDetailsService {
  endpoint = 'https://swapi.dev/api/';
  constructor(private httpClient: HttpClient) {
  }

  getCandidateDetails(): Observable<Candidate[]> {
    return this.httpClient.get<any>(this.endpoint + 'people').pipe(map(data => data.results));
  }

  getCandidatePlanetName(apiEndpoint: string): Observable<HomeWorld> {
    return this.httpClient.get<any>(apiEndpoint);
  }
}
