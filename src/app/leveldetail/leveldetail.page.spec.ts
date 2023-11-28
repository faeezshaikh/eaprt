import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeveldetailPage } from './leveldetail.page';

describe('LeveldetailPage', () => {
  let component: LeveldetailPage;
  let fixture: ComponentFixture<LeveldetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeveldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
