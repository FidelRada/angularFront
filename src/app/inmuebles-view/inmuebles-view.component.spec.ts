import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesViewComponent } from './inmuebles-view.component';

describe('InmueblesViewComponent', () => {
  let component: InmueblesViewComponent;
  let fixture: ComponentFixture<InmueblesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmueblesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
