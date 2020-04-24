import { Component, OnInit } from '@angular/core'
import { BlogService } from './services/blog.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  trailCards$: Observable<any>

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.trailCards$ = this.blogService.getTrails()
  }

}
