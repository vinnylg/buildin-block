import React from 'react'
import styled from 'styled-components'

const Styled = styled.div `
  height:100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  background-color: #343a40;
  border-top: 2px solid #111;
  transition: 0.5s;
  display: inline-grid;
`

function AdminSide( props ){

  return (
    props.open &&
    <Styled>
    </Styled>
  )
}

AdminSide.defaultProps = {
  open: false
}


export default AdminSide
