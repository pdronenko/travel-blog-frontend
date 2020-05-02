import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SharedModule } from '../shared/shared.module'
import { LayoutComponent } from './layout.component'
import { LayoutRoutingModule } from './layout-routing.module'
import { PagesModule } from '../pages/pages.module'

@NgModule({
  declarations: [NavbarComponent, LayoutComponent],
  imports: [
    CommonModule,
    PagesModule,
    LayoutRoutingModule,
    SharedModule
  ],
})
export class LayoutModule { }
