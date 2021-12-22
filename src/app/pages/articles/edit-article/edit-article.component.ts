import { ArticlesService } from './../../../shared/services/articles.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  @ViewChild('editArticleForm', { static: true }) form: NgForm;

  articleData: any = { title: '', content: '', author: '' };

  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articlesService.getOneArticle().subscribe((res) => {
      console.log(res);
    });
  }
  editArticle(editArticleForm: NgForm) {}
  deleteArticle() {}
  handleCancel() {
    this.router.navigate(['/']);
  }
}
