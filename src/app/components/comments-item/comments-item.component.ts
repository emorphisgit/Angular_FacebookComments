import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api';
declare var $: any;
@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.css']
})
export class CommentsItemComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
