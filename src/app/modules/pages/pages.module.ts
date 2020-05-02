import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainPageComponent } from './components/main-page/main-page.component'
import { LoginComponent } from './components/login/login.component'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [MainPageComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    MainPageComponent,
    LoginComponent
  ]
})
export class PagesModule { }
