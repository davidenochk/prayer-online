import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  page = {
    title: "Preset page title"
  }
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Base component set");
  }

  setPage(page: any){
    this.page = {
      ...this.page,
      ...page
    }
  }

}
