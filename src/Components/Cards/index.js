import './styles.css';

function Cards({ title, value, icon }) {
  return (
    <div className="cards flex astart fcolumn">
      <div className="card-title">
        <h5>{title}</h5>
      </div>
      <div className="cards-content flex acenter jbetween">
        <span className='card-icon flex acenter jstart'>{icon}</span>
        <span className="card-value flex acenter jend">
          {value}
        </span>
      </div>
    </div>
  )
}

export default Cards;