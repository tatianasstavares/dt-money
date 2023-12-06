import { createContext, useState, useEffect, type ReactNode } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

// interface TransactionInput {
//   title: string
//   type: string
//   category: string
//   amount: number
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionProvider ({ children }: TransactionsProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => { setTransactions(response.data.transactions) }).catch(err => err)
  }, [])

  async function createTransaction (transactionInput: TransactionInput): Promise<void> {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    }).catch((err) => err)
    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
    </TransactionsContext.Provider>
  )
}
