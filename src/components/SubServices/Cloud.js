import React from 'react'
import SubServices from './SubServices'

export default function Cloud() {
    const title = 'CLOUD SOLUTIONS & SERVICES';  
    const description="Cloud";

    const cloudServices = [
      'Infrastructure as a Service',
      'Cloud Management',
      'Backup Management - On Demand',
      'Security Management - On Demand',
      'Patch Management',
      'Log Management',
      'Reviews And Reporting',
      'Compliance - On Demand',
      'Automation - On Demand'
    ];
    
    return (
      <div>
        <SubServices title={title} description={description} services={cloudServices}/>
      </div>
    );
}
