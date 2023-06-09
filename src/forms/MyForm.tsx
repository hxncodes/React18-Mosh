import React, { FormEvent, useRef } from "react";

const MyForm = () => {
  // Referencing useRef hook
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null)

  // Creating object to store data from inputs
  const person = { name: '', age: 0 }

  // Collecting data from the forms using ref hook by checking if the value is not null
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null)
      person.name = nameRef.current.value;
    if (ageRef.current !== null)
      person.age = parseInt(ageRef.current.value);

    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Submitting through useRef Hook</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" ref={ageRef} type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
