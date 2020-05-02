import { Component, OnInit, Input } from '@angular/core'
import { ITrailPreview } from 'src/app/modules/trails/interfaces/trail-preview.interface'

@Component({
  selector: 'app-trail-card',
  templateUrl: './trail-card.component.html',
  styleUrls: ['./trail-card.component.sass']
})
export class TrailCardComponent implements OnInit {
  @Input() trailPreview: ITrailPreview

  constructor() { }

  ngOnInit(): void {
  }

}
