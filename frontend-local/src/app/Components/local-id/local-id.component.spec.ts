import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalIdComponent } from './local-id.component';

describe('LocalIdComponent', () => {
  let component: LocalIdComponent;
  let fixture: ComponentFixture<LocalIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
