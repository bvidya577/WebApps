import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
//declare var $: any;
@Component({
  selector: 'toolbar-multirow-example',
  templateUrl: 'toolbar-multirow-example.html',
  styleUrls: ['toolbar-multirow-example.css'],
})
export class ToolbarMultirowExample implements OnInit {
  today: number = Date.now();
  model1: NgbDateStruct;
  model2: NgbDateStruct;
  constructor() {}
  toggleDisplayDiv() {
    console.log('55');
    // document.getElementsByClassName("tool").style.visibility="visible"
    $('.toolbar2').toggleClass('toolbarDisplay');
    $('.toolbar2').css('height', 'auto');
  }
  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
    }, 1);
  }
}
