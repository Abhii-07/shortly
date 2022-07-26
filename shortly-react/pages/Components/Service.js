import React from 'react'
import { Box, Heading, ImageBox, Text } from '../../styles/Service.styled'

const Service = ({ title, text, icon}) => {
  return (
    <Box>
        <ImageBox>{icon}</ImageBox>
        <Heading>{title}</Heading>
        <Text>{text}</Text>
    </Box>
  )
}

export default Service