// Importações
import React from 'react'
import * as S from './styles'

type Props = {
  children: React.ReactNode // Corrigido
}

// Componente Card
const Card = ({ children }: Props) => {
  return (
    <S.Container isOverlay>
      <S.Sidebar>
        <div className="divFormulario">{children}</div>
      </S.Sidebar>
    </S.Container>
  )
}

export default Card
