import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesFormComponent } from './inmuebles-form.component';

describe('InmueblesFormComponent', () => {
  let component: InmueblesFormComponent;
  let fixture: ComponentFixture<InmueblesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmueblesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
