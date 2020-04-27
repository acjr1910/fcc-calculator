import React from 'react';
import { Button } from 'reactstrap';

function OperatorPad({ id, label, operator }) {
  return (
    <Button outline color="primary" id={id}>
      {label}
    </Button>
  );
}

export default OperatorPad;
