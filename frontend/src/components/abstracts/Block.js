import React, { useEffect, useState } from 'react'
import GridLayout from 'react-grid-layout';
import styled from 'styled-components'
import '../styles/grid-styles.css'
import '../styles/resize-styles.css'

const Div = styled.div `
  background-color: red;
`

function Block( props ){
  const [ contents, setContents ] = useState(null)

  useEffect(()=>{
    let c = props.block.content.map((ct)=><Div key={ct.id} data-grid={ct.dataGrid}>{ct.data}</Div>)
    setContents(c)
  },[])

  const selectItem = ( item ) => {
    console.log("item selecionada: ",item)
    props.selectItem(item)
  }

  return (
    <GridLayout
      className="layout"
      width={props.size.width}
      cols={props.size.width}
      rowHeight={0}
      compactType={null}
      //callbacks
      // onLayoutChange={(ItemCallback)=>console.log("onLayoutChange",ItemCallback)}
      // onDragStart={(ItemCallback)=>selectItem(ItemCallback)}
      // onDrag={(ItemCallback)=>console.log("onDrag",ItemCallback)}
      // onDragStop={(ItemCallback)=>console.log("onDragStop",ItemCallback)}
      // onResizeStart={(ItemCallback)=>console.log("onResizeStart",ItemCallback)}
      // onResize={(ItemCallback)=>console.log("onResize",ItemCallback)}
      // onResizeStop={(ItemCallback)=>console.log("onResizeStop",ItemCallback)}
      // onDrop={(ItemCallback)=>console.log("onDrop",ItemCallback)}
    >
      { contents }
    </GridLayout>
  )
}


export default Block
