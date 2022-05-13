import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api";
declare var $: any;
@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
})
export class ListItemComponent implements OnInit {
  @Input() listItem;
  public showData;
  public viewId;
  public viewCommentsDetail: any = [];
  public item;
  constructor(private api: ApiService) {}

  ngOnInit() {
  }
  viewDetail(data) {
    this.viewId = data;
    this.viewMyConnents();
  }

  async viewMyConnents() {
    try {
      let data = await this.api.get(`posts/${this.viewId.id}/comments`);
      this.viewCommentsDetail = data;
      $("#exampleModalCenter").modal("show");
    } catch (error) {
      console.error(error);
    }
  }
}
