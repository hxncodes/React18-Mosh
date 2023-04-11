import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const FormStateHook = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  // creating Person object with state hook
  // const [person, setPerson] = useState({ name: "", age: "" });

  // const handleSubmit = (event: FormEvent) => {
  //   event?.preventDefault();
  //   console.log(person);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Form Submitting through react-hook-form@7.43</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name}
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          // value={person.age}
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormStateHook;
