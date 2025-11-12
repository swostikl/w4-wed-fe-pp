import { services } from '../data'
import { useState } from 'react'
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [serviceList, setServiceList] = useState(services)
  
  const removeService = (id) => {
    const filteredServices = serviceList.filter(service => service.id !== id);
    setServiceList(filteredServices);
  };

  const restoreServices = () => {
    setServiceList(services);
  };

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {serviceList.map((service) => {
          return <Service {...service} key={service.id} onRemove={removeService} />
        })}
      </div>
      <button onClick={restoreServices}>Restore All Services</button>
    </section>
  )
}
export default Services