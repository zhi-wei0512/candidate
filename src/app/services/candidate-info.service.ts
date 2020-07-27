import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from '../models/candidate';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CandidateInfoService {
  cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
  webApiUri: string = 'https://api.kcg.gov.tw/api/service/Get/02a18991-bed7-439a-867f-75d3e2920223';
  constructor(private http: HttpClient) { }
  // getAllCandidates(): Observable<any> {
  //   return this.http.get('./assets/candidate.json');
  // }
  getAllCandidates() {
    return this.http.get<Candidate[]>(this.webApiUri);
  }
  saveCandidate(candidate: Candidate) {
    const body = JSON.stringify(candidate);
    this.webApiUri =  this.cors + this.webApiUri ;
    return this.http.post<any>(this.webApiUri, body, httpOptions);
  }


}
