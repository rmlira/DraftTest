export interface Lanche {
  id: string;
  nome: string;
  ingredientes: Ingrediente[];
}

export interface Ingrediente {
  nome: string;
  valor: number;
}
