import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarService } from './service/service.service';
export interface Section {
  name: string;
  id?: string;
  updated: Date;

}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  folders: any[]=[];
data: any[]=[];
  // notes: any[] = [
  //   {
  //     name: 'Vacation Itinerary',
  //     updated: new Date('2/20/16'),
  //   },
  //   {
  //     name: 'Kitchen Remodel',
  //     updated: new Date('1/18/16'),
  //   }
  // ];

  currentDate= new Date();

  notes:any[]=[];
  selectedOption:any[]=[];
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newFolder = new EventEmitter<any>();

 constructor(private readonly sidebarService:SidebarService){}

  ngOnInit() {
    this.sidebarService.getFoldersData().subscribe((resp:any)=>{
      this.folders = resp.Folders;
    });

    this.sidebarService.getNotesData().subscribe((resp:any)=>{
      this.notes = resp.notes;
    });

  }
  c=0;

  valueChange(){
    const abc = this.selectedOption[0];
    this.newItemEvent.emit(abc);
  }
  createFolder(){
this.c = this.c+1;
const data:any[]=[{
      "name":`New Folder ${this.c}`
    }];
    this.newFolder.emit(data);

  }
}

