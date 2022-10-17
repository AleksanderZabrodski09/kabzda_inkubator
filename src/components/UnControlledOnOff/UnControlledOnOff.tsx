import React, {useState} from 'react';
import App from '../../App';

type PropsType = {
  setOn: (on:boolean)=>void
  defaultOn?:boolean
}

export const UnControlledOnOff = (props: PropsType) => {
  let [on, setOn] = useState(props.defaultOn ? props.defaultOn :false);
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

  return (
    <div>
      <div style={onStyle} onClick={() => {
        setOn(true)
      }}>on
      </div>
      <div style={offStyle} onClick={() => {
        setOn(false)
      }}>off
      </div>
      <div style={indicatorStyle}></div>
    </div>

  );
};

