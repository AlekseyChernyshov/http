import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    const url = 'http://localhost:3000/profile'
    return this.http.get<Profile[]>(url)
  }

  getProfileByEmail(email: string): Observable<Profile | undefined> {
    return this.getProfiles().pipe(map(profiles => profiles.find(profile => profile.email === email )))
  }
}
