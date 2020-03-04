import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cloud9spaces';
  propobj = {
    'test': 'test'
  };
  

  constructor(private _adminservice: AdminService) { }

  ngOnInit() {
    //debugger;
    //this.GetPropValue();
  }

  GetPropValue() {
    //debugger
    this._adminservice.getProp().subscribe((data) => {
      var LinesToRead = data.split('\n');
      console.log(this.propobj);
      //  $.each(LinesToRead, function (index, item) {
      //   if (item.includes(":")) {
      //     var key = item.split(":")[0].trim();
      //     var value = escape(item.split(":")[1].trim());
      //     this.propobj[key] = unescape(value);
      //   }
      // })
    })
  }
}
