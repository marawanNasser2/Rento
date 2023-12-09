// AddCarPage.js

import { useState, useEffect } from 'react';
import AddCarForm from '../components/products/addProductForm';

const AddCarPage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:3000/cars', {
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setCars(data.cars);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCars();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Loading list of existing cars...</p>;
  }

  return (
    <div>
      <AddCarForm cars={cars} />
    </div>
  );
};

export default AddCarPage;
