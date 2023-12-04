import { useState } from 'react'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionProvider } from './TransactionsContext'

function App (): JSX.Element {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal (): void {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal (): void {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

        <Dashboard/>

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

      <GlobalStyle/>
      </TransactionProvider>
  )
}

export default App
