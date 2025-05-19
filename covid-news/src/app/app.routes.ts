//rotas

import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'detail/:id', component: PostDetailComponent }
];
