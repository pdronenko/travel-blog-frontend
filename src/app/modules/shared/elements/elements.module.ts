import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TrailCardComponent } from './trail-card/trail-card.component'
import { MaterialModule } from '../material/material.module'



@NgModule({
  declarations: [TrailCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TrailCardComponent,
  ]
})
export class ElementsModule { }
