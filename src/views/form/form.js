import { useEffect, useState } from "react";
import "./form.scss";
import { Button, TextField } from "@mui/material";
import {
  checkBirthDate,
  checkEmail,
  checkString,
  checkZip,
} from "../../validations/formValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  let isValid = true

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    city: "",
    zip: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    city: "",
    zip: "",
  });

  const canSubmit =
    !!data.firstName &&
    !!data.lastName &&
    !!data.email &&
    !!data.birthDate &&
    !!data.city &&
    !!data.zip;

  const checkInputValidity = () => {
    resetError();
    let allValidity = [];
    allValidity.push(checkString(data.lastName, "nom", "lastName"));
    allValidity.push(checkString(data.firstName, "prénom", "firstName"));
    allValidity.push(checkEmail(data.email, "email"));
    allValidity.push(checkBirthDate(data.birthDate));
    allValidity.push(checkString(data.city, "ville", "city"));
    allValidity.push(checkZip(data.zip));

    allValidity.forEach((validity) => {
      if (!validity.isValid) {
        isValid = false
        if (validity.message.target in errors)
          setErrors((prevErrors) => ({
            ...prevErrors,
            [validity.message.target]: validity.message.value,
          }));
        toast(validity.message);
      }
    });
    isValid ? toast("Formulaire envoyé") : toast.error("Une erreur est survenue lors de l'envoie du formulaire")
  };

  const resetError = () => {
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      city: "",
      zip: "",
    });
  };

  const resetData = () => {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      city: "",
      zip: "",
    });
  };

  const saveLocalStorage = () => {
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("email", data.email);
    localStorage.setItem("birthDate", data.birthDate);
    localStorage.setItem("city", data.city);
    localStorage.setItem("zip", data.zip);

  };

  const submit = (event) => {
    checkInputValidity();
    if(isValid) {
      saveLocalStorage();
      resetData();
    }
    event.preventDefault();
  };

  return (
    <>
      <form className="form">
        <div>
          <TextField
            id="outlined-basic"
            label="Prénom"
            value={data.firstName}
            variant="outlined"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                firstName: event.target.value,
              }))
            }
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Nom"
            value={data.lastName}
            variant="outlined"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                lastName: event.target.value,
              }))
            }
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            value={data.email}
            type="text"
            variant="outlined"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                email: event.target.value,
              }))
            }
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Date de naissance"
            value={data.birthDate}
            type="date"
            variant="filled"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                birthDate: event.target.value,
              }))
            }
          />
          {errors.birthDate && <p>{errors.birthDate}</p>}
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Ville"
            value={data.city}
            variant="outlined"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                city: event.target.value,
              }))
            }
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Code postal"
            value={data.zip}
            variant="outlined"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                zip: event.target.value,
              }))
            }
          />
          {errors.zip && <p>{errors.zip}</p>}
        </div>

        <button
          variant="contained"
          color="primary"
          disabled={!canSubmit}
          onClick={(event) => submit(event)}
        >
          Soumettre
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
