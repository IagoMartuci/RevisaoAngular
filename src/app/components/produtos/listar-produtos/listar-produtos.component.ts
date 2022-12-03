import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProdutos: any[] = [
    {nome:'A Sorte Segue a Coragem!', categoria: 'EBOOK', precoProduto: 25, validade: '2022-12-31', id: 1},
    {nome:'Por Que Fazemos o Que Fazemos?', categoria: 'EBOOK', precoProduto: 25, validade: '2022-12-31', id: 2},
    {nome:'Viver em Paz Para Morrer em Paz', categoria: 'EBOOK', precoProduto: 25, validade: '2022-12-31', id: 3},
    {nome:'A Sorte Segue a Coragem!', categoria: 'Fisíco', precoProduto: 30, validade: '2022-12-31', id: 4},
    {nome:'Por Que Fazemos o Que Fazemos?', categoria: 'Fisíco', precoProduto: 30, validade: '2022-12-31', id: 5},
    {nome:'Viver em Paz Para Morrer em Paz', categoria: 'Fisíco', precoProduto: 30, validade: '2022-12-31', id: 6}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
