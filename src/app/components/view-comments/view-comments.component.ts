import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-comments",
  templateUrl: "./view-comments.component.html",
  styleUrls: ["./view-comments.component.css"],
})
export class ViewCommentsComponent implements OnInit {
  viewId;
  constructor(private activatedRoute: ActivatedRoute) {
    this.viewId = this.activatedRoute.snapshot.params["id"];
    console.log(this.viewId);
  }

  ngOnInit() {}
}
