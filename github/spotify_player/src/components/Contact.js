import React from 'react'

import Input from './Input'

const Contact = (props) => (
  <div className="Contact">
    <Input label='Name' value={props.name} onUpdate={props.handleNameUpdate} />
    <Input label='Value' value={props.value} onUpdate={props.handleValueUpdate} />
  </div>
)

export default Contact
