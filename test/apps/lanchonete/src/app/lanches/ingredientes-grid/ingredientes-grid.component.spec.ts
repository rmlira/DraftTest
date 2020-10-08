import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesGridComponent } from './ingredientes-grid.component';

describe('IngredientesGridComponent', () => {
  let component: IngredientesGridComponent;
  let fixture: ComponentFixture<IngredientesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
