import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
declare const $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private _adminservice: AdminService) { }
  propobj = {
    'header': ''
  };
  ngOnInit() {
    if ($(window).width() < 600) {
      $('.navbar-collapse').collapse('hide');
    }
  }

  ngAfterViewInit() {
    
  }
}
