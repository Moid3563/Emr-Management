import React from 'react';
import Button from '@mui/material/Button';
import '../Style/_button.scss';


const ButtonComponent = ({ label, onClick}) => {
  return (
    <>
     <Button
     className='custom-button'
     onClick={onClick}
   >
     {label}
   </Button>
     <Button
     className='custom-buttons'
     onClick={onClick}
   >
     {label}
   </Button>
   </>
  );
};


export default ButtonComponent;
