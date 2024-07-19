import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContenitorComponent } from './card-contenitor.component';

describe('CardContenitorComponent', () => {
  let component: CardContenitorComponent;
  let fixture: ComponentFixture<CardContenitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContenitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContenitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
