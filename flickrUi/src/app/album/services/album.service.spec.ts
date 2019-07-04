import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import { AlbumService } from "./album.service";
import { Observable, observable } from "rxjs";

describe("PhotosService", () => {
  let service: AlbumService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    })
  );

  it("should be created", () => {
    service = TestBed.get(AlbumService);
    expect(service).toBeTruthy();
  });

  it("service should return value on getPublicPhotos", () => {
    let getPublicPhotos = service.getPublicPhotos("test");
    expect(getPublicPhotos instanceof Observable).toBeTruthy();
  });
});
