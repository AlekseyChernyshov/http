import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../services/comments.service';
import { Profile } from '../../interfaces/profile';
import { Comment } from '../../interfaces/comment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent implements OnInit{
  profile?: Profile
  comments: Comment[] = []

  constructor(private profilesService: ProfilesService,
              private route: ActivatedRoute,
              private commentsService: CommentsService,
              private location: Location) {}


    getComments(profile?: Profile) {
    if (profile) {
      this.commentsService.getCommentsByEmail(profile.email).subscribe(comments => {
        this.comments = comments
      })
    }
  }
  
  getProfileByEmail() {
  const profileEmail = this.route.snapshot.paramMap.get("profileEmail") ?? "";

  this.profilesService.getProfileByEmail(profileEmail)
  .subscribe(profile => {
      this.profile = profile

      this.getComments(this.profile)
  })
 }

 goBack() {
  this.location.back()
}
 ngOnInit(): void {
   this.getProfileByEmail()
 }

}
