import React from 'react';
import { Button } from 'react-bootstrap';


const button = ({ variant, value, onClick }) => (
     <Button variant={ variant }  onClick={() => onClick() } block>
         { value }
     </Button>
 );

 export default button;