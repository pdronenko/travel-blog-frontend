import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { of, Observable } from 'rxjs'
import { map, delay } from 'rxjs/operators'
import trails from '../../../../mocks/trails'
import { ITrailPreview } from '../interfaces/trail-preview.interface'

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) { }

  get apiUrl(): string {
    return environment.apiUrl
  }

  getTrails(): Observable<ITrailPreview[]> {
    console.log('getTrails')
    return of(trails).pipe(map(res => res.trails), delay(2000))
  }
}
