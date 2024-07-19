import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDbComponent } from './card-db.component';

describe('CardDbComponent', () => {
  let component: CardDbComponent;
  let fixture: ComponentFixture<CardDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
