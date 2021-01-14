import { Injectable } from '@angular/core';
import { DepositionModel } from '../model/depositionModel';

@Injectable({
  providedIn: 'root'
})
export class DepositionService {

  depositionList: Array<DepositionModel> = ([
    { DepositionId: 1, text: 'Fui com minha família, pedimos rodízio, fomos muito bem atendidos. Churrasco muito gostoso, várias opções. Tem estacionamento também.', author: 'Ludia'},
    { DepositionId: 2, text: 'Almocei com a minha namorada excelente atendimento funcionarios otimos buffet maravilhoso ambiente muito bom.. Adorei', author: 'Daniel P.'},
    { DepositionId: 3, text: 'Como todo brasileiro sou apaixonado por churrasco e pizza... então nada melhor que aproveitar o rodizio nesse estabelecimento.', author: 'Pedro S.'},
    { DepositionId: 4, text: 'Lugar agradável, bom para família, atendimento bom, estacionamento no lugar, reposição de comida constantemente.', author: 'Jaqueline Santos'},
    { DepositionId: 5, text: 'Me sinto bem no local, comida ótima, carnes variadas e muito boas! Ótimo lugar para confraternizar com família e/ou amigos.', author: 'Kaique Silva'},
    { DepositionId: 6, text: 'Um ambiente muitooo familiar, com certeza voltarei outras vezes.', author: 'Alaide Santos'},
  ])

  constructor() { }

  get(){
    return this.depositionList;
  }
}
