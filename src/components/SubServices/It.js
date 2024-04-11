import React from 'react';
import SubServices from './SubServices';

export default function It() {
  const title = 'IT SOLUTIONS&SERVICES';  
  const description='it';

  return (
    <div>
      <SubServices title={title} description={description}/>
    </div>
  );
}
