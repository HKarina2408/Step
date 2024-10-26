import { Component, Input } from '@angular/core';
import { PostType } from '../posts/posts.types';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input({ required: true }) post?: PostType;

}
