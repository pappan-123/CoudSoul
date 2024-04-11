import React from 'react'
import SubServices from './SubServices'

export default function Cloud() {
    const title = 'CLOUD SOLUTIONS & SERVICES';  
    const description="Cloud";

    return (
      <div>
        <SubServices title={title} description={description}/>
      </div>
    );
}
