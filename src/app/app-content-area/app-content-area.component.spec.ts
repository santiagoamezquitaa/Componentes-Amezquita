import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentAreaComponent } from './app-content-area.component';

describe('AppContentAreaComponent', () => {
  let component: AppContentAreaComponent;
  let fixture: ComponentFixture<AppContentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContentAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
