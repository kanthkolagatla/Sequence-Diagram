import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
//import 'lodash'
import {DashboardService, DataService} from './../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import "./../../assets/sequence-diagram-min.js"
declare var $: any;
declare var _: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//implements OnInit
export class DashboardComponent {

  id:any;

  ngOnInit() {

    /*var seq = "";
     seq = "A" + "->" + "B" + ": " + "mmmm" + '\n';
     $(".diagram").text(seq).sequenceDiagram({theme: 'simple'});*/
    /*setTimeout(() => {
     this.es = $('.actor');
     for (let i = 0; i < this.es.length; i++) {
     this.es[i].onclick = function (element) {
     console.log("element", element.toElement.parentElement.textContent);
     this.tooltipFlag = false;
     console.log("this.tooltipFlag",this.tooltipFlag);
     }
     }
     },2000)*/

    //$(".diagram").sequenceDiagram({theme: 'simple'});
  }


  constructor(private dashService: DashboardService, public serviceName:DataService, private route: Router) {
  }


  msgList: any [];
  classList: any [];
  errorList: any [];
  errorFlag = false;
  tooltipFlag = false;
  serviceDetails= false;
  showDialog = false;
  usecase: any;
  sub:any;
  sn:any;
  es: any;
  mes: any;
  mdn: any;
  starttime: any;
  endtime: any;
  indexdata: any;
  filterTooltip: any;

  getUrlsData() {

    console.log("usecase", this.usecase, this.mdn, this.starttime, this.endtime, this.indexdata);

    this.dashService.urlsData(this.usecase, this.mdn, this.starttime, this.endtime, this.indexdata)

      .subscribe(
        (data: any []) => {
          console.log("needed array", data['messages']);
          this.msgList = data['messages'];
          this.classList = data['classes'];
          this.errorList = data['errors'];

          let seq = "";
          for (let i = 0; i < this.classList.length; i++) {
            let className = this.classList[i];
            seq = seq + "participant " + className + '\n';
          }

          for (let i = 0; i < this.msgList.length; i++) {
            let js = this.msgList[i];
            seq = seq + js.start + "->" + js.end + ": " + js.message + '\n';
          }
          $(".diagram").text(seq).sequenceDiagram({theme: 'simple'});

          if (this.errorList.length) {
            this.errorFlag = true;
          }

          setTimeout(() => {
            console.log("this.msgList", this.msgList);
            //let foo = this.msgList;
            this.es = $('.actor');
            this.mes = $('.signal');

            for (let i = 0; i < this.es.length; i++) {
              this.es[i].addEventListener('click', (element) => {
                this.showDialog = !this.showDialog;
                this.guidePath(element.toElement.parentElement.textContent,this.mdn);
              });
            }
            for (let i = 0; i < this.mes.length; i++) {
              this.mes[i].addEventListener('click', (element) => {
                this.showDialog = !this.showDialog;
                this.getEvents(element.toElement.parentElement.textContent, this.msgList)
              });
            }
          }, 1000);
        },
        (error: any []) => {
          console.log("Error", error);
        }
      );
  }

  getEvents(list, obj) {
    this.serviceDetails= false;
    this.tooltipFlag = true;
    this.filterTooltip = obj.filter(o => o.message === list);
  }

  guidePath(className,mdn) {
    this.tooltipFlag = false;
    this.serviceDetails= true;

this.serviceName.dataFromService=className;
this.sn=className;
  }

  closeTooltip() {
    this.tooltipFlag = false;
  }
}

