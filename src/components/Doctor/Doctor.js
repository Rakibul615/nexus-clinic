import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
  const { id, name, title, docImg } = props.doctor;

  return (

    <div className="col">
      <div class="card">
        <img src={docImg} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <Link to={`/doctorDetail/${id}`}>
            <button type="button" class="btn btn-warning"> Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;