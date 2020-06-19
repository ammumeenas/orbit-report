import { Satellite } from '../satellite.';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input()
  satellites: Satellite[];
  

  ngOnInit() { }

  constructor() {

  }
  sort(column:string):void{
this.satellites.sort(function(a:Satellite,b:Satellite):number{
if(a[column]<b[column]){
  return -1;
}
else if(a[column]>b[column]){
  return 1;
}
else{
return 0;
}
});
  }
}

