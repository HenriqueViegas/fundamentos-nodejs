# fundamentos-nodejs
API node utilizando o Data Mapper Pattern

Criação da API que possibilita criação transações financeiras de depósito e retirada.
Ex:

### Entrada de recurso
{
"title": "Salário",
"value": 1000,
"type": "income"
}

### Saída de recurso
{
"title": "Fatura",
"value": 200,
"type": "outcome"
}

### Exibição da listagem das operações:
{
  "transactions": [
    {
      "id": "2ffb03d4-6459-41fa-8c29-e32183ba5da6",
      "title": "Salário",
      "value": 1000,
      "type": "income"
    },
    {
      "id": "df720661-6351-492e-bc62-43b0e91ad9b3",
      "title": "Fatura",
      "value": 200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 1000,
    "outcome": 200,
    "total": 800
  }
}
