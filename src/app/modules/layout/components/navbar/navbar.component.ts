import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { ERoutes } from 'src/app/core/enums/routes.enum'
import { IAppState } from 'src/app/store'
import { Observable } from 'rxjs'
import { getCommonState } from 'src/app/store/common/common.reducer'
import { map } from 'rxjs/operators'
import { toggleProgressBar } from '../../animations/toggleProgressBar.animation'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [toggleProgressBar]
})
export class NavbarComponent implements OnInit {
  ERoutes = ERoutes
  loading$: Observable<boolean> = this.store.pipe(select(getCommonState), map(s => s.loading))

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void { }
}
