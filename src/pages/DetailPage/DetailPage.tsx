import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ExperienceDetail from "../../components/ExperienceDetail/ExperienceDetail";
import useExperience from "../../hooks/useExperience/useExperience";
import { useAppSelector } from "../../redux/hooks";

const DetailPage = (): JSX.Element => {
  const { getExperienceByid } = useExperience();
  const { id } = useParams();

  useEffect(() => {
    getExperienceByid(id!);
  }, [getExperienceByid, id]);

  const experience = useAppSelector(
    ({ experiences }) => experiences.experience
  );

  return <ExperienceDetail experience={experience!} />;
};

export default DetailPage;
