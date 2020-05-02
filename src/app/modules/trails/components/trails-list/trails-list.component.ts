import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ITrailPreview } from '../../interfaces/trail-preview.interface'
import { select, Store } from '@ngrx/store'
import { getTrailsState } from 'src/app/store/trails/trails.reducer'
import { map } from 'rxjs/operators'
import { IAppState } from 'src/app/store'

@Component({
  selector: 'app-trails-list',
  templateUrl: './trails-list.component.html',
  styleUrls: ['./trails-list.component.sass']
})
export class TrailsListComponent implements OnInit {
  trailPreviews$: Observable<ITrailPreview[]> = this.store.pipe(select(getTrailsState), map(s => s.trailPreviews))

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {}
}
