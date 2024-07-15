import React from 'react';
import SubServices from './SubServices';

export default function DataService() {
  const title = 'Data Center Services';  
  const description = "Comprehensive IT Solutions and Services";
  const blog = "Our data centre services are designed to meet the evolving needs of businesses in the digital age. From managing your data centre infrastructure to providing migration services, IMAC (install, move, add, change) support, and IT asset disposition (ITAD), we ensure your data centre operates at peak efficiency and security. Our team of experts combines technical prowess with industry best practices to deliver scalable and reliable solutions tailored to your specific requirements.";

  const cloudServices = [
    {
      title: 'Data Center Services',
      description: 'At CloudSoul Ltd, we understand the critical role that data centres play in today\'s technology-driven world. Our data centre services are designed to ensure the availability, reliability, and security of your mission-critical systems and data. From infrastructure management to disaster recovery planning, our experienced team provides comprehensive solutions tailored to your unique requirements. With our expertise in data centre design, implementation, and maintenance, we help you optimize your operations, mitigate risks, and achieve maximum efficiency.'
    },
    {
      title: 'Server Maintenance',
      description: 'Servers are the backbone of any IT infrastructure, and at CloudSoul Ltd, we specialize in providing top-notch server maintenance services. Our team of certified technicians is well-versed in server technologies and can proactively monitor, troubleshoot, and optimize your server environment. Whether it\'s hardware upgrades, software patches, or performance tuning, we ensure that your servers operate at peak performance, minimizing downtime and maximizing productivity.'
    },
    {
      title: 'Storage Maintenance',
      description: 'Effective storage maintenance is essential for the efficient management and protection of your data. At CloudSoul Ltd, we offer comprehensive storage maintenance services to keep your storage systems running smoothly. Our experts possess in-depth knowledge of various storage technologies and can handle everything from routine maintenance tasks to capacity planning and data migration. With our proactive approach, we identify potential issues before they impact your operations, ensuring the integrity and accessibility of your data.'
    },
    {
      title: 'Network Maintenance',
      description: 'A reliable and secure network is crucial for seamless communication and data transfer within your organization. CloudSoul Ltd provides comprehensive network maintenance services to keep your network infrastructure optimized and secure. Our skilled network technicians perform regular monitoring, configuration management, and troubleshooting to ensure smooth network operations. From firewall management to network performance optimization, we ensure that your network is robust, efficient, and protected against potential threats.'
    }
  ];

  return (
    <div>
      <SubServices title={title} description={description} services={cloudServices} blog={blog} />
    </div>
  );
}
