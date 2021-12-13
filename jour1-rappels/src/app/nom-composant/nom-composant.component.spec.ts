import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomComposantComponent } from './nom-composant.component';

describe('NomComposantComponent', () => {
  let component: NomComposantComponent;
  let fixture: ComponentFixture<NomComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
