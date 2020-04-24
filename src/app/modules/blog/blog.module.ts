import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlogComponent } from './blog.component'
import { BlogRoutingModule } from './blog-routing.module'
import { TrailCardComponent } from './components/trail-card/trail-card.component'
import { TrailComponent } from './components/trail/trail.component'
import { EditTrailComponent } from './components/edit-trail/edit-trail.component'
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [BlogComponent, TrailCardComponent, TrailComponent, EditTrailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
