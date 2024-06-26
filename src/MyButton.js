import React from 'react';

const MyButton = ({ label, onClick }) => {
  const buttonStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  };
  return <button style={buttonStyle} onClick={onClick} type="button" >{label}</button>;
};

export default MyButton;