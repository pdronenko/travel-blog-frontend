import { Component, OnInit } from '@angular/core'
import { ERoutes } from 'src/app/core/enums/routes.enum'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  ERoutes = ERoutes

  constructor() { }

  ngOnInit(): void {
  }

}
