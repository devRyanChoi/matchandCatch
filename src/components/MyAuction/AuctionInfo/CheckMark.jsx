import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function CheckMark(props) {
  if (props.done) {
    return(
      <FontAwesomeIcon icon={solid("circle-check")} style={{ color: "#198a3b", }} />
    )
  } else {
    return(<FontAwesomeIcon icon={solid("circle")} style={{ color: "#eef207", }} />)
    
  }
}