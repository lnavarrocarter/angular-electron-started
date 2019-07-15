import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;
  clock: string;
  datenow: string;
  meses: any = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEPT', 'OCT', 'NOV', 'DIC'];
  profile: any ;

  constructor() {
    this.profile = { fullname :  "Luis Navarro Carter", ocupation: "Vendedor" };
    this.clicked = this.clicked === undefined ? false : true;
    setInterval(() => {
      this.clock = this.getTimerHour();
      this.datenow = this.getTimerHour(false);
    }, 1000 );

  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  private getTimerHour(hour: boolean = true) {
    const today = new Date();
    const mes = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    if (hour) {
      return `${today.getHours()}:${today.getMinutes()}`;
    } else {
      return `${today.getDate()} ${this.meses[mes]}`;
    }
  }

}
