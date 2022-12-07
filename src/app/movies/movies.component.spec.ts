import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {MoviesComponent} from "./movies.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "./movies.service";

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [{provide: HttpClient}, { provide: MoviesService, use: MoviesService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial search text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('There are currently no active searches...');
  })

  it('if text is too short it should display a different message', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.textToSearch = 'aa';
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain('Keep typing... I\'m thinking');
  })

});
