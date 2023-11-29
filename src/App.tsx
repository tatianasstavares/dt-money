import { useState } from 'react'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'

function App () {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false)
  }
  return (

    <div className="App" >
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </div>
  )
}

export default App
