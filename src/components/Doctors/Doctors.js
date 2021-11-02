import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData3.json';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor, setDoctor] = useState(fakeData);
    useEffect(() => {
        setDoctor(fakeData);
    }, [])
    return (
        <div>
            {
                doctor.map(doctor => <Doctor
                    const key={doctor.id}
                    doctor={doctor}
                ></Doctor>)
            }

        </div>
    );
};

export default Doctors;