import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Anime } from './anime';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  private apiUrl: string = environment.baseUrl;

constructor(private httpClient: HttpClient) { }
  getAnimes(): Observable<Anime[]> {
    return this.httpClient.get<Anime[]>(this.apiUrl );
  }
}
