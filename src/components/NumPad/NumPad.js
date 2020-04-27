import React from 'react';
import { Button } from 'reactstrap';

function NumPad({ id, label }) {
  return (
    <Button outline color="secondary" id={id}>
      {label}
    </Button>
  );
}

export default NumPad;
