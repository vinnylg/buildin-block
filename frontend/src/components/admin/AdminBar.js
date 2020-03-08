import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const ButtonStyled = styled(Button) `
  margin-left: 5px;
  margin-right: 5px;
`

function AdminBar( props ){
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>Admin</Navbar.Brand>
      <ButtonStyled onClick={props.openLeftSide}>Left</ButtonStyled>
      <ButtonStyled onClick={props.openWorkspace}>Workspace</ButtonStyled>
      <ButtonStyled onClick={props.sizeWorkspace}>SizeWorkspace</ButtonStyled>
    </Navbar>
  )
}

export default AdminBar
