import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

interface Artist {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
  highlight: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  query: string;
  artists: Artist[] = [];
  private subscription: Subscription = new Subscription();
  currentArtist: Artist | null = null;

  constructor(private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.subscription.add(
      this.http.get<Artist[]>('../assets/data.json').subscribe( // Deprecated should be using an Observer.
        data => {
          this.artists = data;
        },
        error => {
          console.error('Error fetching artists data', error);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up subscription
  }

  showArtist(item: Artist) {
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }
}
