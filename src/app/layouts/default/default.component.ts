import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
item:any[]=[];
folderData:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(addItem:any){
    this.item.push(addItem.data);
this.folderData = this.item[0];
this.item =[];
  }
  addNewItem(addItem:any){
    this.folderData.push(addItem[0])
  }
}
