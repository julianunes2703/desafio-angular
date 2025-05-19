import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  post = {
    title: '',
    description: ''
  };

  constructor(private postService: PostService) {}

  createPost() {
    this.postService.createPost(this.post).subscribe({
      next: () => {
        alert('Post criado com sucesso!');
      },
      error: (err) => {
        alert('Erro ao criar post: ' + err.message);
      }
    });
  }
}
