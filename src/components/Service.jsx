import deleteIcon from '../assets/images/delete.png';

const Service = ({ icon, title, text, details, onRemove, id }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
        {details && <p className='service-details'>{details}</p>}
      </div>
      <button className='btn remove-btn' onClick={() => onRemove(id)}><img src={deleteIcon} alt="Delete" /></button>
    </article>
  )
}
export default Service
