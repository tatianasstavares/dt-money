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

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionProvider ({ children }: TransactionsProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => { setTransactions(response.data.transactions) }).catch(err => err)
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
        {children}
    </TransactionsContext.Provider>
  )
}
