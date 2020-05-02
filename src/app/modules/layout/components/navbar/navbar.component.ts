import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { IAppState } from 'src/app/store'
import { getCommonState } from 'src/app/store/common/common.reducer'
import { map } from 'rxjs/operators'
import { toggleProgressBar } from '../../animations/toggleProgressBar.animation'
import { ERoutes } from 'src/app/core/enums/routes.enum'

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
