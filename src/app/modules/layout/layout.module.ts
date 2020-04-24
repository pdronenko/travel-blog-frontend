import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
