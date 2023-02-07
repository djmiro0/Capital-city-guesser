import React from 'react';

import '../CSS/CardHolder.css';

export default function CardHolder({ person }) {
  return <span className="cardHolder">{person}</span>;
}
