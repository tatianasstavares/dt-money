import { useContext } from 'react'
import { Container } from './styles'
import { TransactionsContext } from '../../TransactionsContext'

export function TransactionsTable (): JSX.Element {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                  {transactions.map(transaction => {
                    const { id, title, amount, category, createdAt, type } = transaction
                    const transactioDate = new Date(createdAt)
                    return (
                        <tr key={id}>
                        <td className="title">{title}</td>
                        <td className={type}>
                          { new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(amount)}
                        </td>
                        <td>{category}</td>
                        <td>
                        { new Intl.DateTimeFormat('pt-BR').format(transactioDate)}
                        </td>
                    </tr>
                    )
                  })}
                </tbody>
            </table>
        </Container>
  )
}
