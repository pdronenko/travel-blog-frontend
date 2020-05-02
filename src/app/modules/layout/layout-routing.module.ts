import { Routes, RouterModule } from '@angular/router'
import { StateResolver } from 'src/app/core/resolvers/state.resolver'
import { ERoutes } from 'src/app/core/enums/routes.enum'
import { NgModule } from '@angular/core'
import { LayoutComponent } from './layout.component'
import { MainPageComponent } from '../pages/components/main-page/main-page.component'
import { LoginComponent } from '../pages/components/login/login.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
        resolve: { state: StateResolver },
        data: {
          pageTitle: 'Main Page'
        }
      },
      {
        path: ERoutes.LOGIN.split('/')[1],
        component: LoginComponent,
        resolve: { state: StateResolver },
        data: {
          pageTitle: 'Login'
        }
      },
      {
        path: ERoutes.TRAILS_LIST.split('/')[1],
        loadChildren: () => import('../trails/trails.module').then(m => m.TrailsModule)
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
