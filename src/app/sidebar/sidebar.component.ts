import { Component, OnInit,ViewChild } from '@angular/core';
  
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
// import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
  
  onOpenDrawerTap() {
      this.drawerComponent.sideDrawer.showDrawer();
  }
  onCloseDrawerTap() {
      this.drawerComponent.sideDrawer.closeDrawer();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
