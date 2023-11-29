import Modal from 'react-modal'
import React, { useState } from 'react'
import closeImg from '../../assets/close.png'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import incomeImg from '../../assets/incoming.svg'
import outcomeImg from '../../assets/outcomes.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps): JSX.Element {
  const [type, setType] = useState('deposit')

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
            <Container>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='Título'
                />
                 <input
                    type='number'
                    placeholder='Valor'
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
                />
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>

        </Modal>
  )
}
