import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';

import Doctor from '../Doctor/Doctor';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState(fakeData);
    useEffect(() => {
        setServices(fakeData);
    }, [])

    return (
        <div>
            <div className="mt-3">
                <h1>Find a Doctor</h1>
            </div>
            <div className="container">
                <div className=" services-container  p-3 mb-5 bg-body ">
                <div className=" service-container row   p-1 row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(doctor => <Doctor
                            const key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
                </div>

            </div>
            <div className=" p-2">
                <h1>Our Services</h1>
            </div>
            <div className=" services-container  p-3 mb-5 bg-body rounded">

                <div class=" service-container row   p-1 row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            const key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

            <div id="covid-service" className="img-fluid">
                
               
            </div>
        </div>

    );
};


export default Home;