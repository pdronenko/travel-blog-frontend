import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { TrailEditorComponent } from './components/trail-editor/trail-editor.component'
import { TrailViewerComponent } from './components/trail-viewer/trail-viewer.component'
import { TrailsListComponent } from './components/trails-list/trails-list.component'
import { TrailsRoutingModule } from './trails-routing.module'

@NgModule({
  declarations: [TrailEditorComponent, TrailViewerComponent, TrailsListComponent],
  imports: [
    CommonModule,
    TrailsRoutingModule,
    SharedModule
  ]
})
export class TrailsModule { }
