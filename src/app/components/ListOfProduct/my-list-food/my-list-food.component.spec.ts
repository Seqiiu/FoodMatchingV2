import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListFoodComponent } from './my-list-food.component';

describe('MyListFoodComponent', () => {
  let component: MyListFoodComponent;
  let fixture: ComponentFixture<MyListFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

