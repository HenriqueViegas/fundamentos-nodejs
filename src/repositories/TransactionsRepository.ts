import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}


class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions
  }

  public getBalance(): Balance {

    const income = this.transactions
      .filter(transaction => transaction.type == 'income')
      .map(transaction => transaction.value)
      .reduce((acumulator, transactionValue) => acumulator + transactionValue, 0)

    const outcome = this.transactions
      .filter(transaction => transaction.type == 'outcome')
      .map(transaction => transaction.value)
      .reduce((acumulator, transactionValue) => acumulator + transactionValue, 0)


    const total = income - outcome

    return { income, outcome, total }

  }

  public create(title: string, value: number, type: 'outcome' | 'income'): Transaction {
    const transaction = new Transaction({ title, value, type })

    this.transactions.push(transaction)

    return transaction
  }
}

export default TransactionsRepository;
