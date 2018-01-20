import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartlistListComponent } from './cartlist-list.component';

describe('CartlistListComponent', () => {
  let component: CartlistListComponent;
  let fixture: ComponentFixture<CartlistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartlistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
