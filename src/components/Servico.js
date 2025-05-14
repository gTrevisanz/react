import React from 'react'
import Col from 'react-bootstrap/Col'

export default function Servico(props) {
  return (
   <Col  lg="3" md="6" sm="12" className='servico px-4 '>
    <img src={props.imagemServico} alt={props.tituloImagem}/>
    <h3>{props.tituloServico}</h3>
   </Col>
  )
}
