import React from 'react';

function BaseInput (props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type || 'text'} onChange={props.onChange} value={props.value} />
    </div>
  )
}

export const Input = props => <BaseInput {...props} />;

export default BaseInput;