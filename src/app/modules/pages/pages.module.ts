import { CommonModule } from '@angular/common'
import { LoginComponent } from './components/login/login.component'
import { MainPageComponent } from './components/main-page/main-page.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

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
