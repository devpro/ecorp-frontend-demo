import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SystemInformationModel } from '../models/system-information.model';

@Injectable({
  providedIn: 'root'
})
export class SystemInformationService {
  constructor(private http: HttpClient) { }

  getForBackend(): Observable<SystemInformationModel> {
    const params = { };
    return this.http.get<SystemInformationModel>(`${environment.backendUrl}system-informations`, { params });
  }
}
