import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-trail-card',
  templateUrl: './trail-card.component.html',
  styleUrls: ['./trail-card.component.sass']
})
export class TrailCardComponent implements OnInit {
  @Input() trailCard

  constructor() { }

  ngOnInit(): void {
  }

}
