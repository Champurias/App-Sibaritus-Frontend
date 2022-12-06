import { Link } from "react-router-dom";
import useExperience from "../../hooks/useExperience/useExperience";
import { Experience } from "../../redux/features/experienceSlice/types";
import Button from "../Button/Button";
import ExperienceCardStyled from "./ExperienceCardStyled";

interface ExperienceCardProps {
  experience: Experience;
}
const ExperienceCard = ({ experience }: ExperienceCardProps): JSX.Element => {
  const { deleteExperience } = useExperience();
  const handDeleteExperience = () => {
    deleteExperience(experience.id!);
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <ExperienceCardStyled className="card">
      <div className="card__tittle__container">
        <h2 className="card__title">{experience.title}</h2>
        <h3 className="card__title_secundary">{experience.owner}</h3>
      </div>
      <Link to={`/experience/${experience.id}`}>
        <img
          src={experience.picture}
          alt={`Experience ${experience.title}`}
          height="315"
          width="315"
        />
      </Link>
      <Button text="BORRAR" type="button" action={handDeleteExperience} />
    </ExperienceCardStyled>
  );
};

export default ExperienceCard;
