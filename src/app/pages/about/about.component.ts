import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  title = 'about';
  constructor() { }

  ngOnInit() {
   
  }

  ngAfterViewInit(){
    if ($(window).width() < 600) {
      $('.navbar-collapse').collapse('hide');
    }
  }
}
