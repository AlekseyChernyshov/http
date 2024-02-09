import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../services/comments.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
post = this.postsService.getPostById(this.route.snapshot.paramMap.get('postId')?? '')
  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private commentsService: CommentsService,
              private location: Location) {}


  goBack() {
    this.location.back()
  }
}
