import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./components/posts/posts.component";
import { ApiService } from "./services/api";
import { HttpClientModule } from "@angular/common/http";
import { ViewCommentsComponent } from "./components/view-comments/view-comments.component";
import { ListItemComponent } from './components/list-item/list-item.component';
import { CommentsItemComponent } from './components/comments-item/comments-item.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, ViewCommentsComponent, ListItemComponent, CommentsItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
