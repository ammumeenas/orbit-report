import { Satellite } from './satellite.';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sourceList: Satellite[];
  displayList: Satellite[];

  title = 'orbit-report';
  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    window.fetch(satUrl).then(function (response) {
      response.json().then(function (data) {
        let fetchedData = data.satellites;
        for (let i = 0; i < fetchedData.length; i++) {

          let satellite = new Satellite(fetchedData[i].name, fetchedData[i].type, fetchedData[i].operational, fetchedData[i].orbitType, fetchedData[i].launchDate);
          this.sourceList.push(satellite);
        }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));

    }.bind(this));

  }

  search(searchTerm: string): void {
    
    let searchSatellite: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i = 0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      let type = this.sourceList[i].type.toLowerCase();
      let orbitType = this.sourceList[i].orbitType.toLowerCase();


      if (name.indexOf(searchTerm)>=0 || type.indexOf(searchTerm) >=0|| orbitType.indexOf(searchTerm) >= 0) {
        searchSatellite.push(this.sourceList[i]);
      }
      this.displayList = searchSatellite;
    }
  }
}
