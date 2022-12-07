import { Experience } from "../../redux/features/experienceSlice/types";
import ExperienceDetailStyled from "./ExperienceDetailStyled";

interface ExperienceDetailProps {
  experience: Experience;
}

const ExperienceDetail = (experience: ExperienceDetailProps): JSX.Element => {
  const {
    experience: { location, detail, owner, price, title, picture },
  } = experience;

  return (
    <ExperienceDetailStyled>
      <div className="experience-detail__picture">
        <img src={picture} alt={title} height="200" width="250" />
      </div>
      <h2 className="experience-detail__title">{title}</h2>
      <h3 className="experience-detail__owner">{owner}</h3>
      <h5 className="experience-detail__price">{price}€</h5>
      <h5 className="experience-detail__location">{location}</h5>
      <p className="experience-detail__detail">{detail}</p>
    </ExperienceDetailStyled>
  );
};

export default ExperienceDetail;
