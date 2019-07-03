import { Component, ViewEncapsulation, Input } from "@angular/core";

import { Observable } from "rxjs";
import { AlbumService } from "./services/album.service";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AlbumComponent {
  constructor(private albumService: AlbumService) {}
  type = "grid";
  results$: Observable<any>;
  search = "Mumbai";
  searchResult: Array<any> = [];
  ngOnInit() {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.results$ = this.albumService.getPublicPhotos(this.search);
  }
}
