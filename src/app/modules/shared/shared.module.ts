import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material/material.module'
import { ElementsModule } from './elements/elements.module'

@NgModule({
  declarations: [],
  imports: [
    ElementsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    ElementsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
