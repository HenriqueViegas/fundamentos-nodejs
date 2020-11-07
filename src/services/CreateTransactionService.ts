import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string,
  value: number,
  type: 'income' | 'outcome'
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {

    const makeTransaction = this.transactionsRepository.getBalance()

    if (type === 'outcome' && makeTransaction.total < value) {
      throw Error('Value of outcome higher than total account')
    }

    const transaction = this.transactionsRepository.create(title, value, type)

    return transaction
  }
}

export default CreateTransactionService;
