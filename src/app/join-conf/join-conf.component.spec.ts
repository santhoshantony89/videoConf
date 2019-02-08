import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinConfComponent } from './join-conf.component';

describe('JoinConfComponent', () => {
  let component: JoinConfComponent;
  let fixture: ComponentFixture<JoinConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
