import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
dataSelected:any[]=[];
  constructor(private https:HttpClient) { }

  getFoldersData(){
    const path = `../../../../assets/folders.json`;
    return this.https.get(path);
  }

  getNotesData(){
    const path = `../../../../assets/notes.json`;
    return this.https.get(path);
  }
}
