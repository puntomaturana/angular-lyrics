import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Songs } from '../model/songs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  private serverURL: string = 'https://api.lyrics.ovh/v1/';
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json;'
  });
  private Lyric: string;

  constructor(private http: HttpClient) { }
  
  getSong(artist, title) {
    return this.http.get(this.serverURL+artist+'/'+title, { headers: this.headers });
  }
}
