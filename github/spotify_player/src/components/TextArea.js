import React, {Component, PropTypes} from 'react'

function TextArea(props) {
  return (
      <div className="Input">
        <label className="Input-label" htmlFor={props.inputId}>{props.label}</label>
        <textarea type={props.type} className="Input-input" id={props.inputId} value={props.value} onChange={props.onUpdate} />
      </div>
    )
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default TextArea
