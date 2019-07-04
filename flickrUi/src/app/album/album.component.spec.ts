import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AlbumComponent } from "./album.component";
import { AlbumService } from "./services/album.service";
import { of } from "rxjs";

const albumServiceMock = {
  getPublicPhotos: jasmine
    .createSpy("getPublicPhotos")
    .and.returnValue(of("test"))
};
describe("AlbumComponent", () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      providers: [{ provide: AlbumService, useValue: albumServiceMock }],
      imports: [FormsModule],
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

  it("should return list of photos", () => {
    let results = component.results$;
    expect(results["value"]).toBe("test");
  });
});
