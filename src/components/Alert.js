import React from 'react'
const capitalise= (s)=>{
  let str=s.toLowerCase();
  return str.charAt(0).toUpperCase()+str.slice(1);
}

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalise(props.alert.type)}</strong> {props.alert.msg}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
      }
    </div>
  )
}
