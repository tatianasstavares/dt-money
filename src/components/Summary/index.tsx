/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from './styles'
import incomeImg from '../../assets/incoming.svg'
import outcomeImg from '../../assets/outcomes.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary (): JSX.Element {
  const { transactions } = useContext(TransactionsContext)

  return (
       <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Incomings" />
            </header>
            <strong>R$1000</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong>- R$500</strong>
        </div>
        <div className="highlightBackground">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Incomings" />
            </header>
            <strong>R$500</strong>
        </div>
       </Container>
  )
}
