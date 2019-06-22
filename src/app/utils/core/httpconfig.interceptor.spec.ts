import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpConfigInterceptor } from './httpconfig.interceptor';

describe('CoreComponent', () => {
  let component: HttpConfigInterceptor;
  let fixture: ComponentFixture<HttpConfigInterceptor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpConfigInterceptor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpConfigInterceptor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
