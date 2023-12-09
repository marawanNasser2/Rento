import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/Form/FormInputError';
import SelectInput from '../../UI/Form/SelectInput';
//import TextAreaInput from '../../UI/Form/TextAreaInput';
import TextInput from '../../UI/Form/TextInput';

const AddCarForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);

  // const carsOptions = props.cars.map((car) => {
  //   return { name: `${car.Brand} ${car.Model} (${car.Year})`, value: car._id };
  // });

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `BEARER ${authContext.token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        label="Car Plate"
        type="text"
        name="carPlate"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.carPlate && (
        <FormInputError>Car plate must not be empty</FormInputError>
      )}

      <TextInput
        label="Brand"
        type="text"
        name="Brand"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Brand && (
        <FormInputError>Brand must not be empty</FormInputError>
      )}

      <TextInput
        label="Model"
        type="text"
        name="Model"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Model && (
        <FormInputError>Model must not be empty</FormInputError>
      )}

      <TextInput
        label="Year"
        type="number"
        name="Year"
        register={register}
        validation={{ required: true, min: 1900, max: new Date().getFullYear() }}
      />
      {formState.errors.Year && (
        <FormInputError>Enter a valid year</FormInputError>
      )}

      <TextInput
        label="Car Type"
        type="text"
        name="carType"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.carType && (
        <FormInputError>Car type must not be empty</FormInputError>
      )}

      <TextInput
        label="Image URL"
        type="text"
        name="carImages"
        register={register}
      />

      <SelectInput
        label="Availability"
        name="Availability"
        register={register}
        validation={{ required: true }}
        options={[
          { name: 'Available', value: true },
          { name: 'Not Available', value: false },
        ]}
      />
      {formState.errors.Availability && (
        <FormInputError>Availability must not be empty.</FormInputError>
      )}

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Car
      </button>
    </form>
  );
};

export default AddCarForm;
