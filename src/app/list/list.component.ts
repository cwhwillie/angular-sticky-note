import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  fakeNoteList = [
    { description: "note1" },
    { description: "note2dsfgdfgdfg dfsg dfgsdfg" }
  ];
  activeNote = -1;

  constructor() { }

  ngOnInit() {
  }

  delete(i: number) {
    this.fakeNoteList.splice(i, 1);
  }

  active(i: number) {
    this.activeNote = i;
  }
}