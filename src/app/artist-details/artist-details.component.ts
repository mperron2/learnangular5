import { Component, Input } from '@angular/core';

interface Artist {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
  highlight: boolean;
}

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html'
})
export class ArtistDetailsComponent {
  @Input() artist!: Artist;
}
