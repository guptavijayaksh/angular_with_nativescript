import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Equip } from './equip';
// import { HeroService } from '../hero.service';



@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})
export class EquipComponent implements OnInit {

  // @Output() OutputToParent = new EventEmitter<any>();

  equip = new Equip();
  // data: any;
  
  
  // displayedColumns: string[] = [];
  // dataSource: any;
  constructor() { }
  ngOnInit(): void {
    // this.getEquips();
   
  }


  // getEquips() {
  //   let resp = this.service.getEquips()
   
  //   resp.subscribe((data: {}) => {
  //     console.log(data);
  //     this.dataSource = data; 
  //     this.data = data;
  //     return data;
  //   });

  // }


}
