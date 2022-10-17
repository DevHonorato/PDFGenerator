import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFTemplateComponent } from './pdftemplate.component';

describe('PDFTemplateComponent', () => {
  let component: PDFTemplateComponent;
  let fixture: ComponentFixture<PDFTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDFTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
