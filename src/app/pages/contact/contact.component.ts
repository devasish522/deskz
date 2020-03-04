import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
    if ($(window).width() < 600) {
      $('.navbar-collapse').collapse('hide');
    }
  }
}
