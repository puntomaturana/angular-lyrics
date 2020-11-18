import { Component, OnInit } from '@angular/core';
import { Songs } from '../model/songs';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  malditaLetra:any;
  constructor(private songService: LyricsService) { }

  ngOnInit(): void {
    //this.songService.getSong().subscribe(lyrucs => this.letra = lyrucs);
  }

  buscaCanciones(artist, song) {
    this.songService.getSong(artist, song).subscribe(lyrucs => this.malditaLetra = lyrucs);
  }

}
