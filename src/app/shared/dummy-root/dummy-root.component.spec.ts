import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyRootComponent } from './dummy-root.component';

describe('DummyRootComponent', () => {
  let component: DummyRootComponent;
  let fixture: ComponentFixture<DummyRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
