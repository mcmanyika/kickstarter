import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

const Header = (props) => {
  if (props.email) {
  return (
    <div style={{height: '100px', backgroundColor: '#ccc'}}>
      {props.email.email}
    </div>
  ) 
} else return (
    <>
    
    </>
  )
}
export default Header;




