import React, {useState} from 'react';

export default function Filter (props) {
  const buttons = [
    { name: "Newest", value: "Newest" },
    { name: "Oldest", value: "Oldest" }
  ];
  
  const filters = buttons.map(({ name, value }) => (
    <button
      key={name}
      value={value}
    >
      {name}
    </button>
  ))

  return(
    <>{filters}</>
  )
}