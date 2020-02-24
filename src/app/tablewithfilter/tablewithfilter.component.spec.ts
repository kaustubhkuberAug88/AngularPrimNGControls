import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablewithfilterComponent } from './tablewithfilter.component';

describe('TablewithfilterComponent', () => {
  let component: TablewithfilterComponent;
  let fixture: ComponentFixture<TablewithfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablewithfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablewithfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
