import { Component, OnInit } from '@angular/core';
import { LocalService } from '../localstorage.service';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  searchTerm: any = "";
  viewData: any[] = [];
  filter: any;
  filteredData: any;

  constructor(private storage: LocalService,
    private service: ServiceNameService
  ) { }

  ngOnInit() {
    // this.retrieveData();
  }

  ionViewWillEnter() {
    this.retrieveData();

  }

  onChange(event: any) {
    let data = event.target.value.toLowerCase();
    console.log(data);
      this.filteredData = this.viewData.filter((i => i.Title.toLowerCase().includes(event.target.value.toLowerCase())));
      console.log('Filtered Data:', this.filteredData);


      // this.filteredData = this.viewData.filter((Title) => Title.toLowerCase().indexOf(this.filteredData) > -1);
      // console.log('Filtered Data:', this.filteredData);
  }
  retrieveData() {
    const storedData = this.storage.getData('Data');
    console.log(storedData);
    if (storedData != null) {
      this.viewData = JSON.parse(storedData);
      this.filteredData = this.viewData;
      console.log('f:',this.filteredData)
      // console.log('Data:', this.viewData);
    }
  }
}
