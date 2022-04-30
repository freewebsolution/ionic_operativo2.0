import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettaglioinsalatonePage } from './dettaglioinsalatone.page';

describe('DettaglioinsalatonePage', () => {
  let component: DettaglioinsalatonePage;
  let fixture: ComponentFixture<DettaglioinsalatonePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioinsalatonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettaglioinsalatonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
