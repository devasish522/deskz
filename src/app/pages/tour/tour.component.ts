import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
declare const Email: any;
declare const $: any;


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit, AfterViewInit {
  emailForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  currentDate:String = new Date().toString();

  ngAfterViewInit() {
    if ($(window).width() < 600) {
      $('.navbar-collapse').collapse('hide');
    }
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var output = (day<10 ? '0' : '') + day + '-' +
    (month<10 ? '0' : '') + month + '-' +
    d.getFullYear() ;

    $("#datetimepicker").val(output + " 09:00");

    $('#datetimepicker').datetimepicker({
      language: 'en',
      format: 'dd-mm-yyyy HH:ii P',
      //useCurrent: true,
    })
  }
  ngOnInit() {
    this.emailForm = this.fb.group({
      fullName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      dateTime: ["", Validators.required],
      phone: ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      remark: ["", [Validators.required]]
    });



    this.emailForm.valueChanges.subscribe(x => {
      if (this.emailForm.touched || this.emailForm.dirty) {
        this.loginValidation(this.emailForm);
      }
    })
  }

  loginValidation(group: FormGroup = this.emailForm) {
    debugger;
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.emailErrors[key] = "";

      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {

        const msg = this.validationMessages[key];

        for (const errorkey in abstractControl.errors) {
          if (errorkey) {
            this.emailErrors[key] = msg[errorkey];
          }
        }
      }
    })
  }

  validationMessages = {
    'fullName': {
      'required': 'User Name is required'
    },
    'email': {
      'required': 'email is required',
      'pattern' : 'invalid email'
    },
    'phone': {
      'required': 'phone is required',
      'maxlength':'phone number should contain 10 digits',
      'pattern' :'phone number should contain digits',
    },
    'remark': {
      'required': 'remark is required'
    },
    'dateTime': {
      'required': 'date time is required'
    }
  }

  emailErrors = {
    'fullName': '',
    'email': '',
    'phone': '',
    'remark': '',
    'dateTime': ''
  };

  onSubmit() {
    debugger;
    if (this.emailForm.valid) {
      const fullName: String = this.emailForm.get('fullName').value;
      const email: String = this.emailForm.get('email').value;
      const phone: String = this.emailForm.get('phone').value;
      const remark: String = this.emailForm.get('remark').value;
      const dateTime: String = this.emailForm.get('dateTime').value;

      const body: String = "<label>Full Name</label> " + fullName + "<br/>" + "<label>Email</label> " + email + "<br/>" + "<label>Phone</label> " + phone + "<br/>" + "<label>Date Time</label> " + dateTime + "<br/>" + "<label>Remarks</label> " + remark;

      Email.send({
        Host: "smtp.gmail.com",
        Username: "cloudninehyd@gmail.com",
        Password: "C9hgm09$",
        To: 'contact@deskz.in',
        From: "cloudninehyd@gmail.com",
        Subject: "Scheduling a tour for " + fullName,
        Body: body,
      }).then(
        message => {
          this.emailForm.reset();
          this.emailForm.markAsPristine();
          this.emailForm.markAsUntouched();
          alert("mail sent successfully");
        });
    }
    else {
      alert("please fill the form");
    }
  }

 
}
