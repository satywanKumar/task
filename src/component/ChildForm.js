import React from 'react'

function ChildForm({ register, handleSubmit, errors, onSubmit }) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && <div>Name is required</div>}
        </div>
  
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && <div>Email is required</div>}
        </div>
  
        <div>
          <label htmlFor="company_name">Company Name:</label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            ref={register({ required: true })}
          />
          {errors.company_name && <div>Company name is required</div>}
        </div>
  
        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            ref={register({ required: true })}
          />
          {errors.phone_number && <div>Phone number is required</div>}
        </div>
  
        <div>
          <label htmlFor="requirement">Requirement:</label>
          <textarea
            id="requirement"
            name="requirement"
            rows="4"
            ref={register({ required: true })}
          ></textarea>
          {errors.requirement && <div>Requirement is required</div>}
        </div>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default ChildForm;
