import { useEffect } from "react";
import useExperience from "../../hooks/useExperience/useExperience";
import { Experiences } from "../../redux/features/experienceSlice/types";
import { useAppSelector } from "../../redux/hooks";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ExperienceListStyled from "./ExperienceListStyled";

const ExperienceList = (): JSX.Element => {
  const experiences: Experiences = useAppSelector(
    (state) => state.experiences.experienceList
  );
  const { loadAllExperiences } = useExperience();

  useEffect(() => {
    loadAllExperiences();
  }, [loadAllExperiences]);

  return (
    <ExperienceListStyled>
      {experiences.map((experience) => (
        <li key={experience.id}>
          <ExperienceCard experience={experience} />
        </li>
      ))}
    </ExperienceListStyled>
  );
};

export default ExperienceList;
