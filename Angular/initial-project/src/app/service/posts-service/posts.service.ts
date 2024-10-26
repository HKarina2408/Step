import { Injectable } from '@angular/core';
import { PostType } from '../../posts/posts.types';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() { }

  posts: PostType[] = [];

  async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    console.log(posts, 'posts');

    this.posts = posts;
  }
}
