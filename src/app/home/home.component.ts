import { Component, OnInit } from '@angular/core';

import { SystemInformationModel } from '../backend/models/system-information.model';
import { SystemInformationService } from '../backend/services/system-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backendSystemInformation!: SystemInformationModel;

  constructor(private systemInformationService: SystemInformationService) { }

  ngOnInit(): void {
    this.systemInformationService.getForBackend().subscribe(models => (this.backendSystemInformation = models));
  }
}
