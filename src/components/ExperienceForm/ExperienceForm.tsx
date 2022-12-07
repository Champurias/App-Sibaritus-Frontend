import React, { useState } from "react";
import useExperience from "../../hooks/useExperience/useExperience";
import { Experience } from "../../redux/features/experienceSlice/types";
import Button from "../Button/Button";
import ExperienceFormStyled from "./ExperienceFormStyled";

const initialFormData = {
  title: "",
  owner: "",
  picture: "",
  location: "",
  price: 0,
  detail: "",
};

const ExperienceForm = (): JSX.Element => {
  const { createExperience } = useExperience();
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: Experience = {
      title: formData.title,
      owner: formData.owner,
      picture: formData.picture,
      location: formData.location,
      price: formData.price,
      detail: formData.detail,
    };

    createExperience(formDataToSubmit);
  };

  return (
    <>
      <ExperienceFormStyled>
        <h2 className="experience-form__title">Añade tu nueva experiencia</h2>
        <div>
          <form className="experience-form" onSubmit={handleSubmit}>
            <div className="register-form__container">
              <label className="register-form__label" htmlFor="title">
                Title:
              </label>
              <input
                className="register-form__field"
                type="text"
                id="title"
                required
                autoComplete="off"
                onChange={handleFormChange}
              />
            </div>

            <div className="register-form__input">
              <label className="register-form__label" htmlFor="picture">
                Picture:
              </label>
              <input
                className="register-form__field"
                type="text"
                id="picture"
                required
                autoComplete="off"
                onChange={handleFormChange}
              />
            </div>

            <div className="register-form__input">
              <label className="register-form__label" htmlFor="owner">
                Owner:
              </label>
              <input
                className="register-form__field"
                type="text"
                id="owner"
                required
                autoComplete="off"
                onChange={handleFormChange}
              />
            </div>
            <div className="register-form__input">
              <label className="register-form__label" htmlFor="location">
                Location:
              </label>
              <input
                className="register-form__field"
                type="text"
                id="location"
                required
                autoComplete="off"
                onChange={handleFormChange}
              />
            </div>
            <div className="register-form__input">
              <label className="register-form__label" htmlFor="price">
                Price:
              </label>
              <input
                className="register-form__field"
                type="text"
                id="price"
                required
                autoComplete="off"
                onChange={handleFormChange}
              />
            </div>
            <div className="register-form__input">
              <label className="register-form__label" htmlFor="detail">
                Detail:
              </label>
              <textarea
                rows={5}
                className="register-form__field"
                id="detail"
                required
                autoComplete="off"
                onChange={handleFormChange}
              />
            </div>
            <Button
              text={"Crea tu experiencia"}
              type={"submit"}
              action={() => {}}
            />
          </form>
        </div>
      </ExperienceFormStyled>
    </>
  );
};

export default ExperienceForm;
