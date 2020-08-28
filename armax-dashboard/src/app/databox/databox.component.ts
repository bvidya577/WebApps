import { Component, OnInit, ViewChild } from '@angular/core';
import { ArmaxDataService } from '../armax-data.service';
import { EventEmitter, Output } from '@angular/core';
import { chartsComponent } from '../charts.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-databox',
  templateUrl: './databox.component.html',
  styleUrls: ['./databox.component.css'],
})
export class DataboxComponent implements OnInit {
  @ViewChild(chartsComponent, { static: false }) childC: chartsComponent;
  armaxData = [];
  expandVal: string = 'normal';
  constructor(private arData: ArmaxDataService) {}
  expand(p: string) {
    console.log(p);
    var w = $(window).width(),
      h = $(window).height();
    if (w > 1139) {
      if (this.expandVal == 'normal') {
        if (p == 'invH') {
          $('.m1, .m3, .m4').hide();
          $('.m2')
            .addClass('col-lg-12')
            .removeClass('col-lg-6')
            .css({ 'max-width': '98%', height: 0.75 * h, transition: '400' });
        } else if (p == 'Real') {
          $('.m2, .m3, .m4').hide();
          $('.m1')
            .addClass('col-lg-12')
            .removeClass('col-lg-6')
            .css({ 'max-width': '98%', height: 0.75 * h, transition: '400' });
        } else if (p == 'events') {
          $('.m2, .m1, .m4').hide();
          $('.m3')
            .addClass('col-lg-12')
            .removeClass('col-lg-6')
            .css({ 'max-width': '98%', height: 0.75 * h, transition: '400' });
        } else if (p == 'cntrlS') {
          $('.m2, .m1, .m3').hide();
          $('.m4')
            .addClass('col-lg-12')
            .removeClass('col-lg-6')
            .css({ 'max-width': '98%', height: 0.75 * h, transition: '400' });
        }
        $('.collapseImg').addClass('showImg').removeClass('hideImg');
        $('.expandImg').addClass('hideImg').removeClass('showImg');

        $('.space')
          .height(0.6 * h)
          .css('transition', '300');
        //  $('#lineChart').css({ height: 0.7 * h, width: '100%' });
        this.childC.expand(w);
        $('.matTable').height(0.6 * h);
        this.expandVal = 'expanded';
        console.log(this.expandVal);
      } else if (this.expandVal == 'expanded') {
        $('.expandImg').addClass('showImg').removeClass('hideImg');
        $('.collapseImg').addClass('hideImg').removeClass('showImg');
        $('.space').height(200).css('transition', '300');
        if (p == 'invH') {
          $('.m2')
            .removeClass('col-lg-12')
            .addClass('col-lg-6')
            .css({ 'max-width': '48%', height: '300px', transition: '400' });

          $('.m1, .m3, .m4').show(500);
        } else if (p == 'Real') {
          $('.m1')
            .removeClass('col-lg-12')
            .addClass('col-lg-6')
            .css({ 'max-width': '48%', height: '300px', transition: '400' });
          $('.m2, .m3, .m4').show(500);
        } else if (p == 'Real') {
          $('.m1')
            .removeClass('col-lg-12')
            .addClass('col-lg-6')
            .css({ 'max-width': '48%', height: '300px', transition: '400' });
          $('.m2, .m3, .m4').show(500);
        } else if (p == 'events') {
          $('.m3')
            .removeClass('col-lg-12')
            .addClass('col-lg-6')
            .css({ 'max-width': '48%', height: '300px', transition: '400' });
          $('.m2, .m1, .m4').show(500);
        } else if (p == 'cntrlS') {
          $('.m4')
            .removeClass('col-lg-12')
            .addClass('col-lg-6')
            .css({ 'max-width': '48%', height: '300px', transition: '400' });
          $('.m2, .m1, .m3').show(500);
        }
        this.childC.contract(w);
        $('.matTable').height(210);
        this.expandVal = 'normal';
        // console.log(this.expandVal);
      }
    }
  }
  ngOnInit(): void {
    this.arData.getProduct().subscribe((res: any) => (this.armaxData = res)),
      (error: any) => console.error(error);
    setTimeout(() => {
      // console.log('data', this.armaxData);
      // console.log($('.statusColor').text());
    }, 2000);
  }
}
