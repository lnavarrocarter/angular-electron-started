import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntoventa',
  templateUrl: './puntoventa.component.html',
  styleUrls: ['./puntoventa.component.scss']
})
export class PuntoventaComponent implements OnInit {
  total: number;
  items: Array<{name: string, code: any, cant: number, price: number}>;
  constructor() { 
    this.items = [];
    this.total = 0;

  }

  ngOnInit() {
  }

  /**
   * Agrega productos al detalle de la compra
   * @param code 
   */
  async productAgree(code: any = 122332132131){
    
    if(await this.checkCodeAgree(code)){
      this.items.push({name: "CocalCola 1.5L", code: 122332132131, cant: 1, price: 5000});
    }
    this.caculateTotal();
  }

  
  caculateTotal(){
    this.total = 0;
    this.items.forEach((value,index) => {
      this.total += (value.cant * value.price)
    });
  }


  /**
   * Verifica que si el producto esta repetido aumenta en 1 el item
   * @param code 
   */
  async checkCodeAgree(code: any){
    let res = true;
    await this.items.forEach((value, index) => {
      if(value.code == code ){
        this.items[index].cant = this.items[index].cant + 1;
        res = false;
      } 
    })
    return res;
  }

}
