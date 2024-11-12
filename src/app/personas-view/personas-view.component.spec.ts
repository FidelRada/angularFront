import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasViewComponent } from './personas-view.component';

describe('PersonasViewComponent', () => {
  let component: PersonasViewComponent;
  let fixture: ComponentFixture<PersonasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
