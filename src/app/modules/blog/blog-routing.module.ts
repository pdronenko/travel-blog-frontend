import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { BlogComponent } from './blog.component'
import { StateResolver } from 'src/app/core/resolvers/state.resolver'

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: { state: StateResolver },
    data: {
      pageTitle: 'Trails'
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
