import React from 'react'
import SubServices from './SubServices'

export default function Software() {
    const title = 'SOFTWARE DEVELOPMENT';  

    const softwareDevelopmentServices = [
      'Custom software development tailored to specific business needs',
      'Web application development (frontend and backend)',
      'Mobile app development for iOS and Android platforms',
      'Enterprise software integration and API development',
      'Quality assurance and testing services',
      'User experience (UX) and user interface (UI) design',
      'Legacy system modernization and migration',
      'Continuous support and maintenance for developed software'
    ];
    
  const description="Soft"
    return (
      <div>
        <SubServices title={title} description={description} services={softwareDevelopmentServices}/>
      </div>
    );
}
