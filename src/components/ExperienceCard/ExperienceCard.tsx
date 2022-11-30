import { Experience } from "../../redux/features/experienceSlice/types";
import ExperienceCardStyled from "./ExperienceCardStyled";

interface ExperienceCardProps {
  experience: Experience;
}

const experienceCard = ({ experience }: ExperienceCardProps): JSX.Element => {
  return (
    <ExperienceCardStyled className="card">
      <h2 className="card__title">{experience.title}</h2>
      <img
        src={experience.picture}
        alt={`Experience ${experience.title}`}
        height="155"
        width="150"
      />
    </ExperienceCardStyled>
  );
};

export default experienceCard;
