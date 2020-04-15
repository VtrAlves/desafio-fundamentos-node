import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

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
    return this.transactions;
  }

  public getBalance(): Balance {
    const { value: income } = this.transactions.reduce(
      (total, currentValue) => {
        if (currentValue.type === 'income') {
          const value = total.value + currentValue.value;

          return {
            ...total,
            value,
          };
        }

        return total;
      },
      { value: 0 },
    );

    const { value: outcome } = this.transactions.reduce(
      (total, currentValue) => {
        if (currentValue.type === 'outcome') {
          const value = total.value + currentValue.value;

          return {
            ...total,
            value,
          };
        }

        return total;
      },
      { value: 0 },
    );

    const balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({
      title,
      type,
      value,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
