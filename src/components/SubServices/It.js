import React from 'react';
import SubServices from './SubServices';

export default function It() {
  const title = 'IT SOLUTIONS & SERVICES';  
  const description='it';

  const itServices = [
    'Network infrastructure setup and management',
    'Cybersecurity solutions (firewalls, antivirus, encryption)',
    'Data backup and disaster recovery planning',
    'IT consulting and support services',
    'Hardware and software procurement and installation',
    'Remote monitoring and management',
    'IT project management & implementation',
    'End-user training and support',
  ];

  return (
    <div>
      <SubServices title={title} description={description} services={itServices}/>
    </div>
  );
}
