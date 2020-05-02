import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ERoutes } from 'src/app/core/enums/routes.enum'
import { loadTrailPreviews } from 'src/app/store/trails/trails.action'
import { StateResolver } from 'src/app/core/resolvers/state.resolver'
import { TrailEditorComponent } from './components/trail-editor/trail-editor.component'
import { TrailsListComponent } from './components/trails-list/trails-list.component'

const routes: Routes = [
  {
    path: '',
    component: TrailsListComponent,
    resolve: { state: StateResolver },
    data: {
      action: loadTrailPreviews,
      pageTitle: 'Trails List'
    },
  },
  {
    path: ERoutes.ADD_TRAIL.split('/')[2],
    component: TrailEditorComponent,
    resolve: { state: StateResolver },
    data: {
      pageTitle: 'Add Trail'
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailsRoutingModule { }
