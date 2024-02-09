import { Component } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comment = this.commentsService.getCommentByPostId(this.route.snapshot.paramMap.get('postId') ?? '')
   constructor(private commentsService: CommentsService,
             private route: ActivatedRoute,
             private location: Location) {}

    goBack() {
      this.location.back()
    }
}
