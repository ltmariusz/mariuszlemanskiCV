import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Experience {
  dateFrom: string;
  dateTo: string;
  title: string;
  company: string;
  description: string; // Popraw literówkę z "descroption" na "description"
  pictureName?:string | Array<string>
}

@Injectable({
  providedIn: 'root'
})
export class ManageCvService {

  constructor( private http:HttpClient) { }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('/assets/data/experience.json');
  }
}
