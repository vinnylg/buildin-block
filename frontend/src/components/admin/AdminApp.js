import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'

import AdminBar from './AdminBar'
import AdminSide from './AdminSide'
import Workspace from './Workspace'
import Block from '../abstracts/Block'

const Styled = styled.div `
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #808080;
  overflow-y: auto;
`

function AdminApp(){
  const [ leftSide, setLeftSide ] = useState(false)
  const [ workspaceSize, setWorkspaceSize ] = useState(null)
  const [ itemSelected, setItemSelected ] = useState(null)
  const [ blocks, setBlocks ] = useState([{
    grid: {
      cu: 'cu'
    },
    content: [
      {
        id: 'FFDAdf',
        type: 'textBlock',
        data: ' sou oto Block',
        dataGrid: {x: 40, y: 25, w: 50, h: 30, minW: 0, maxW: (props) => props.size.width, minH: 0, maxH: Infinity, static: false, isDraggable: true, isResizable: true }
      },
    ]
  }])

  const handleLeftSide = () => setLeftSide(!leftSide)

  const withSizeHOC = withSize()
  withSizeHOC(Workspace)

  const onSizeWorkspace = ( size ) => {
    setWorkspaceSize(size)
  }

  return (
    <Styled>
      <AdminBar openLeftSide={handleLeftSide} />
      <AdminSide open={leftSide} selectItem={itemSelected}/>
      <Workspace leftSide={leftSide} onSize={onSizeWorkspace}>
      {
          blocks.map((b)=><Block size={workspaceSize} block={b} selectItem={(item)=>setItemSelected(item)}/>)
      }
      </Workspace>
    </Styled>
  )
}

export default AdminApp
