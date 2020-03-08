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
  const [ leftSide, setLeftSide ] = useState(true)
  const [ workspace, setWorkspace ] = useState({active: true})

  const handleLeftSide = () => setLeftSide(!leftSide)
  const handleWorkspace = () => setWorkspace(!workspace)

  const withSizeHOC = withSize()
  withSizeHOC(AdminBar)

  const onSizeWorkspace = ( size ) => {
    setWorkspace({
      ...workspace,
      size: size
    })
    console.log(' Workspace size is ', workspace.size)
  }

  return (
    <Styled>
      <AdminBar openLeftSide={handleLeftSide} openWorkspace={handleWorkspace}/>
      <AdminSide open={leftSide}/>
      { workspace &&
        <Workspace leftSide={leftSide} onSize={onSizeWorkspace}>
          <Page size={workspace.size}/>
        </Workspace>
      }
    </Styled>
  )
}

export default AdminApp
