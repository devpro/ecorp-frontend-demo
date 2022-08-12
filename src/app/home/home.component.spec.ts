import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SystemInformationModel } from '../backend/models/system-information.model';
import { SystemInformationService } from '../backend/services/system-information.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  const service = jasmine.createSpyObj<SystemInformationService>('SystemInformationService', ['getForBackend']);
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{ provide: SystemInformationService, useValue: service }]
    })
    .compileComponents();

    service.getForBackend.and.returnValue(
      of({ machineName: 'Dummy', processorArchitecture: 'x42', frameworkDescription: 'dark-side', runtimeIdentifier: 'dux' } as SystemInformationModel)
    );
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
