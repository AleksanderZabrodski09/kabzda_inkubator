import React from 'react';
import App from '../../App';

type OnOffType = {
  on: boolean
  setOn:(on: boolean)=>void
}

export const UnControlledOnOff = (props: OnOffType) => {
  //let [on, setOn] = useState(false);
  const onStyle = {
    width: '30px',
    height: '20px',
    display: 'inline-block',
    border: '1px solid #000000',
    padding: '3px',
    backgroundColor: props.on ? 'green' : 'white',
    cursor: 'pointer'

  };
  const offStyle = {
    width: '30px',
    height: '20px',
    display: 'inline-block',
    border: '1px solid #000000',
    padding: '3px',
    marginLeft: '2px',
    backgroundColor: !props.on ? 'red' : 'white',
    cursor: 'pointer'
  };
  const indicatorStyle = {
    width: '15px',
    height: '15px',
    display: 'inline-block',
    border: '1px solid #000000',
    borderRadius: '50%',
    marginLeft: '2px',
    backgroundColor: props.on ? 'green' : 'red'

  };

  return (
    <div>
      <div style={onStyle} onClick={() => {
        props.setOn(true)
      }}>on
      </div>
      <div style={offStyle} onClick={() => {
        props.setOn(false)
      }}>off
      </div>
      <div style={indicatorStyle}></div>
    </div>

  );
};

