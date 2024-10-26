import { Component } from '@angular/core';
import { PostsService } from '../service/posts-service/posts.service';
import { PostItemComponent } from "../post-item/post-item.component";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostItemComponent],
  providers: [PostsService],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  constructor(public postsService: PostsService) {
    postsService.getPosts();
  }
}
