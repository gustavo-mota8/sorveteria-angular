import { Component } from '@angular/core';
import { Sabor } from '../../modelos/sabor';
import { Sorvete } from '../../services/sorvete';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sabores',
  imports: [CommonModule],
  templateUrl: './sabores.html',
  styleUrl: './sabores.css',
})
export class Sabores {


  public sabores:Sabor[]=[];

  constructor(private sorvete:Sorvete) {}

  ngOnInit () {

    this.buscarSorvetes();
    
  }
    buscarSorvetes():void {


      this.sorvete.getSabores().subscribe
      (

        (dadosrecebidos) => {

          this.sabores = dadosrecebidos;
        },

        (erro) => {

          console.error("Erro:", erro);

        }
      )

    }

  


}
