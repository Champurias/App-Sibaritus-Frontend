import { Experience } from "../../redux/features/experienceSlice/types";
import ExperienceCardStyled from "./ExperienceCardStyled";

interface ExperienceCardProps {
  experience: Experience;
}

const experienceCard = ({ experience }: ExperienceCardProps): JSX.Element => {
  return (
    <ExperienceCardStyled className="card">
      <div className="card__tittle__container">
        <h2 className="card__title">{experience.title}</h2>
        <h3 className="card__title_secundary">{experience.owner}</h3>
      </div>
      <img
        src={experience.picture}
        alt={`Experience ${experience.title}`}
        height="315"
        width="315"
      />
    </ExperienceCardStyled>
  );
};

export default experienceCard;
