import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api";
declare var $: any;
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  public showData;
  public totalPost;
  public viewId;
  public listItem;
  public viewCommentsDetail: any = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log(this.listItem);
    this.postList();
  }
  public async postList() {
    try {
      let data = await this.api.get("posts/");
      this.showData = data;
      this.totalPost = this.showData.length;
    } catch (error) {
      console.error(error);
    }
  }
  viewDetail(data) {
    this.viewId = data;
  }
}
