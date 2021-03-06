import React from 'react'

import propTypes from 'prop-types'

import { Card, Title } from './styled'

export default function CardInfo({ children, title, color, ...rest }) {

  return (
    <Card color={color} {...rest} >
      <Title>{title}</Title>
      {children}
    </Card>
  )
}

CardInfo.defaultProps = {
  title: "batata"
}

CardInfo.propTypes = {
  title: propTypes.string
}
