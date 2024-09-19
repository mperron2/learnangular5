import { Component, Input } from '@angular/core';

interface Artist {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
  highlight: boolean;
}

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html'
})
export class ArtistItemsComponent {
  @Input() artist!: Artist;
}
