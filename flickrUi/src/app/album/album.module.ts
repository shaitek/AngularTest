import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { AlbumComponent } from "./album.component";
import { ImageComponent } from "./image/image.component";
import { AlbumService } from "./services/album.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AlbumComponent, ImageComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [AlbumComponent],
  providers: [AlbumService]
})
export class AlbumModule {}
