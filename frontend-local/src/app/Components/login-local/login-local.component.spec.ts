import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLocalComponent } from './login-local.component';

describe('LoginLocalComponent', () => {
  let component: LoginLocalComponent;
  let fixture: ComponentFixture<LoginLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
