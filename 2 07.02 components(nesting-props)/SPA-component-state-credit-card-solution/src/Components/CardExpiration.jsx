import React from 'react';

import '../CSS/CardExpiration.css';

export default function CardExpiration({ expirationDate }) {
  return (
    <span className="expiration">
      <p className="expValid">VALID</p>
      <p className="expThru">THRU</p>
      <p className="expDate">{expirationDate}</p>
    </span>
  );
}
