import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AlbumModule } from "./album/album.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AlbumModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
