import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGallery } from './interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  url: string = "https://jsonplaceholder.typicode.com/photos"
  fetchPhotos(): Observable<IGallery[]>{
    return this.http.get<IGallery[]>(this.url)
  }
}
