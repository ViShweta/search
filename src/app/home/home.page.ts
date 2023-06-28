import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '../localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userForm: FormGroup;
  userData: any = [];

  constructor(
    private storage: LocalService,
  ) {
    this.userForm = new FormGroup({

      Title: new FormControl(""),
      Content: new FormControl(""),

    });
  }


  OnSubmit(value: any) {
    console.log(value);
    var storedData = this.storage.getData('Data');
    if (storedData != null) {
      this.userData = JSON.parse(storedData);
    }
    this.userData.push(value);
    this.storage.saveData('Data', JSON.stringify(this.userData));
    this.userForm.reset();

  }

}
