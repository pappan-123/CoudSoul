import React from 'react';
import SubServices from './SubServices';

export default function Maintenance() {
  const title = 'Maintenance Services';  
  const description = 'Comprehensive IT Solutions and Services';
  const blog = "At CloudSoul Ltd, we offer comprehensive maintenance services to ensure the smooth operation and optimal performance of your IT infrastructure. Our skilled technicians provide break-fix support, asset management, server maintenance, storage maintenance, network maintenance, and more. We understand the criticality of maintaining your IT systems and work diligently to minimize downtime and maximize productivity. Trust us to keep your technology assets running efficiently, allowing you to focus on your core business operations.";

  const breakfixServices = [
    {
      title: 'Maintenance Services',
      description: 'At CloudSoul Ltd, we offer comprehensive maintenance services to ensure the smooth and efficient operation of your technology infrastructure. Our skilled technicians are equipped with the knowledge and expertise to proactively monitor, manage, and maintain your systems. From routine hardware and software updates to system optimization and performance tuning, we provide timely and reliable maintenance services tailored to your specific needs. With our proactive approach, we minimize downtime, enhance system reliability, and extend the lifespan of your technology investments.'
    },
    {
      title: 'Break Fix',
      description: 'When unexpected technical issues arise, you can rely on CloudSoul Ltd\'s break fix services to quickly and effectively resolve them. Our team of experienced technicians is adept at diagnosing and troubleshooting a wide range of hardware and software problems. Whether it\'s a malfunctioning device, software glitch, or network connectivity issue, we swiftly identify the root cause and implement the necessary repairs or replacements. With our prompt response and efficient problem-solving, we minimize disruptions to your business operations and help you get back on track.'
    },
    {
      title: 'Asset Management',
      description: 'Effective asset management is crucial for optimizing your technology investments and maximizing their value. At CloudSoul Ltd, we offer comprehensive asset management services to help you track, monitor, and manage your IT assets throughout their lifecycle. Our asset management experts assist you in inventory management, procurement planning, software license tracking, and hardware lifecycle management. By gaining better visibility and control over your assets, you can make informed decisions, reduce costs, and ensure compliance with licensing agreements.'
    }
  ];

  return (
    <div>
      <SubServices title={title} description={description} services={breakfixServices} blog={blog} />
    </div>
  );
}
