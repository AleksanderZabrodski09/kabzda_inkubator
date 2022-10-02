import React, {useState} from 'react';
import App from '../../App';

type OnOffType = {
  onChange:(on:boolean)=>void
}

export const UncontrolledOnOff = (props: OnOffType) => {
  let [on, setOn] = useState(false);
  const onStyle = {
    width: '30px',
    height: '20px',
    display: 'inline-block',
    border: '1px solid #000000',
    padding: '3px',
    backgroundColor: on ? 'green' : 'white',
    cursor: 'pointer'

  };
  const offStyle = {
    width: '30px',
    height: '20px',
    display: 'inline-block',
    border: '1px solid #000000',
    padding: '3px',
    marginLeft: '2px',
    backgroundColor: !on ? 'red' : 'white',
    cursor: 'pointer'
  };
  const indicatorStyle = {
    width: '15px',
    height: '15px',
    display: 'inline-block',
    border: '1px solid #000000',
    borderRadius: '50%',
    marginLeft: '2px',
    backgroundColor: on ? 'green' : 'red'

  };

  const onClicked=()=>{
    setOn(true)
    props.onChange(true)
  }
  const offClicked=()=>{
    setOn(false)
    props.onChange(false)
  }


  return (
    <div>
      <div style={onStyle} onClick={onClicked}>on
      </div>
      <div style={offStyle} onClick={offClicked}>off
      </div>
      <div style={indicatorStyle}></div>
    </div>

  );
};

