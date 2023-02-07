import React from 'react';

import '../CSS/Bank.css';

export default function Bank({ name }) {
  return (
      <strong className="bankName">{name}</strong>
  );
}
