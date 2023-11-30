import Modal from 'react-modal'
import React, { type FormEvent, useState } from 'react'
import closeImg from '../../assets/close.png'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { api } from '../../services/api'
import incomeImg from '../../assets/incoming.svg'
import outcomeImg from '../../assets/outcomes.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps): JSX.Element {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction (event: FormEvent): void {
    event.preventDefault()
    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button className='react-modal-close' type='button' onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='Título'
                    value={title}
                    onChange={event => {
                      setTitle(event.target.value)
                    } }
                />
                 <input
                    type='number'
                    placeholder='Valor'
                    value={value}
                    onChange={event => { setValue(Number(event.target.value)) }}
                />
                <TransactionTypeContainer>
                    <RadioBox
                      type='button'
                      onClick={() => { setType('deposit') }}
                      isActive={type === 'deposit'}
                      activeColor="green"
                    >
                     <img src={incomeImg} alt='Entrada'/>
                     <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                     type='button'
                     onClick={() => { setType('withdraw') }}
                     isActive={type === 'withdraw'}
                     activeColor="red"
                    >
                     <img src={outcomeImg} alt='Saída' />
                     <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => { setCategory(event.target.value) }}
                />
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>

        </Modal>
  )
}
