import React from 'react';

function BaseButton({onClick, label}) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          background: 'cyan',
          padding: '10px 20px',
          border: 'none',
          color: '#fff',
          fontSize: "16px"
        }}
      >
        {label}
      </button>
    </div>
  );
}

export const Button = props => <BaseButton {...props} />;

export default BaseButton;