import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule { }
