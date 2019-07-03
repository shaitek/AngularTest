import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AlbumComponent } from "./album.component";
import { AlbumModule } from "./album.module";
import { AlbumService } from "./services/album.service";

describe("PhotosComponent", () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AlbumComponent],
      providers: [
        AlbumModule,
        { provide: AlbumService, useClass: AlbumMockService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should return list of photos", () => {});
});

class AlbumMockService {
  fetchPhotos() {
    return [];
  }
}
