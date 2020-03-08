import React, { useState } from 'react'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'

import AdminBar from './AdminBar'
import AdminSide from './AdminSide'
import Workspace from './Workspace'
import Page from '../abstracts/Page'

const Styled = styled.div `
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #808080;
`

function AdminApp(){
  const [ leftSide, setLeftSide ] = useState(false)
  const [ workspaceSize, setWorkspaceSize ] = useState(null)

  const handleLeftSide = () => setLeftSide(!leftSide)

  const withSizeHOC = withSize()
  withSizeHOC(Workspace)

  const onSizeWorkspace = ( size ) => {
    setWorkspaceSize(size)
  }

  return (
    <Styled>
      <AdminBar openLeftSide={handleLeftSide} />
      <AdminSide open={leftSide}/>
      <Workspace leftSide={leftSide} onSize={onSizeWorkspace}>
        <Page size={workspaceSize}/>
      </Workspace>
    </Styled>
  )
}

export default AdminApp
