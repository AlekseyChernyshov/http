import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { PostComponent } from './components/post/post.component';
const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch:'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'comments/:postId', component: CommentsComponent},
  {path: 'profiles/:profileEmail', component: ProfilesComponent},
  {path: 'post/:postId', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
