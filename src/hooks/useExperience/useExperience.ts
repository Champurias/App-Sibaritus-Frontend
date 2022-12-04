import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteExperienceActionCreator,
  getExperienceActionCreator,
} from "../../redux/features/experienceSlice/experienceSlice";
import { Experience } from "../../redux/features/experienceSlice/types";
import { openModalActionCreator } from "../../redux/features/Uislice/Uislice";
import { useAppDispatch } from "../../redux/hooks";

const useExperience = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

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

  const deleteExperience = async (experienceId: string) => {
    try {
      await axios.delete(`${apiUrl}/experience/delete/${experienceId}`, {});
      dispatch(deleteExperienceActionCreator(experienceId));

      dispatch(
        openModalActionCreator({
          isError: false,
          messageFeedback: "tu experiencia ha sido borrada",
        })
      );
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          messageFeedback: "hemos tenido un error",
        })
      );
    }
  };

  const createExperience = async (experienceData: Experience) => {
    try {
      await axios.post(`${apiUrl}/experience/create`, experienceData);

      dispatch(
        openModalActionCreator({
          isError: false,
          messageFeedback: "Has creado una experiencia",
        })
      );

      navigate("/home");
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          messageFeedback: "hemos tenido un error",
        })
      );
    }
  };
  return { loadAllExperiences, deleteExperience, createExperience };
};
export default useExperience;
