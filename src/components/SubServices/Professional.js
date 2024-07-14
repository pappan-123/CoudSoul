import React from 'react';
import SubServices from './SubServices';

export default function Professional() {
  const title = 'Professional Services';  
  const description = 'Comprehensive IT Solutions and Services';
  const blog = "At Braeriach Ltd, we offer a range of professional services to help you leverage technology for business growth. Our experienced professionals provide Wi-Fi surveys to assess and optimize your wireless network performance, ensuring seamless connectivity throughout your premises. Additionally, we offer on-site engineering resources to support your IT operations, delivering timely and efficient technical assistance when you need it the most. Count on our expertise and dedication to deliver outstanding results for your business.";

  const itServices = [
    {
      title: 'Wi-Fi Surveys',
      description: 'With the increasing demand for seamless wireless connectivity, Braeriach Ltd provides Wi-Fi survey services to ensure optimal coverage and performance. Our experienced technicians conduct thorough surveys of your premises to assess signal strength, interference, and capacity requirements. By analyzing the survey data, we design and deploy Wi-Fi networks that deliver reliable and high-speed connectivity throughout your space. Our Wi-Fi survey services enable you to provide a superior wireless experience to your employees, guests, or customers.'
    },
    {
      title: 'On-Site Engineering Resources',
      description: 'At Braeriach Ltd, we understand the importance of having skilled engineering resources available when you need them. Our on-site engineering resources offer flexible and scalable support for your IT infrastructure. Whether it\'s deploying new equipment, troubleshooting complex issues, or providing ongoing maintenance, our dedicated engineers are available to work on-site, becoming an extension of your team. With their expertise and industry knowledge, our on-site engineering resources ensure the smooth operation and optimal performance of your IT environment.'
    },
    {
      title: 'Migration',
      description: 'When it\'s time to upgrade or migrate your IT systems, Braeriach Ltd is here to assist you. Our migration services encompass the seamless transition of your data, applications, and infrastructure to new platforms or environments. Our experienced team carefully plans and executes the migration process, minimizing disruption to your operations. From data migration to application migration and cloud migration, we ensure a smooth and efficient transition, allowing you to leverage the benefits of advanced technologies while preserving the integrity of your data.'
    },
    {
      title: 'IMAC (Install, Move, Add, Change)',
      description: 'Braeriach Ltd offers comprehensive IMAC services to support your evolving IT requirements. Our skilled technicians handle the installation, relocation, addition, and change of hardware and software components within your infrastructure. Whether it\'s setting up new workstations, moving equipment to a new location, adding users to the network, or implementing system changes, we ensure a seamless and efficient process. Our IMAC services allow you to adapt to changing business needs and maintain a flexible and agile IT environment.'
    },
    {
      title: 'ITAD (IT Asset Disposition)',
      description: 'Proper disposal of outdated or decommissioned IT assets is essential to protect sensitive data and comply with environmental regulations. Braeriach Ltd provides IT Asset Disposition services to help you securely and responsibly manage the end-of-life of your IT equipment. From data sanitization to equipment recycling and disposal, we ensure that your retired assets are handled in an environmentally friendly manner while ensuring data security and compliance.'
    }
  ];

  return (
    <div>
      <SubServices title={title} description={description} services={itServices} blog={blog} />
    </div>
  );
}
