import axios from "axios";
import { useCallback } from "react";
import { getExperienceActionCreator } from "../../redux/features/experienceSlice/experienceSlice";
import { openModalActionCreator } from "../../redux/features/Uislice/Uislice";
import { useAppDispatch } from "../../redux/hooks";

const useExperience = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const loadAllExperiences = useCallback(async () => {
    try {
      const {
        data: { experience },
      } = await axios.get(`${apiUrl}/experience/list`);

      dispatch(getExperienceActionCreator(experience));
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          messageFeedback: "no hay experiencias disponibles",
        })
      );
    }
  }, [dispatch, apiUrl]);
  return { loadAllExperiences };
};

export default useExperience;
