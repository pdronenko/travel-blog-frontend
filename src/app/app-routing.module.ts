import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ERoutes } from './core/enums/routes.enum'


const routes: Routes = [
  { path: ERoutes.BLOG, loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: '', redirectTo: ERoutes.BLOG, pathMatch: 'full' },
  { path: '**', redirectTo: ERoutes.BLOG }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
