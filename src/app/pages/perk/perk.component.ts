import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-perk',
  templateUrl: './perk.component.html',
  styleUrls: ['./perk.component.css']
})
export class PerkComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if ($(window).width() < 600) {
      $('.navbar-collapse').collapse('hide');
    }
  }

}
