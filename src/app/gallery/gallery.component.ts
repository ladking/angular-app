import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { IGallery } from '../interfaces';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit{
  
  public _response: IGallery[] = [];

  constructor(private _apiService: ApiServiceService){}

  ngOnInit() {
    this._apiService.fetchPhotos()
      .subscribe(data =>{
        this._response = data
      
      });
      
  }
}

