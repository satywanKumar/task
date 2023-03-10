import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ChildForm from "./ChildForm";

function Parent() {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, errors } = useForm();
  
    const onSubmit = (data) => {
      axios
        .post("https://dashboard.omnisellcrm.com/api/store", {
          ...data,
          lead_types_id: "sandbox",
        })
        .then((response) => {
          console.log(response);
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div>
        <ChildForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
        {success && <div>Form submitted successfully!</div>}
      </div>
    );
  }
  
  export default Parent;
  