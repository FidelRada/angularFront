import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionZonasComponent } from './informacion-zonas.component';

describe('InformacionZonasComponent', () => {
  let component: InformacionZonasComponent;
  let fixture: ComponentFixture<InformacionZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionZonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
