import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Experience, ExperienceState } from "./types";

export const initialExperienceState: ExperienceState = {
  experienceList: [],
  experience: {} as Experience,
};

const experiencesSlice = createSlice({
  name: "experience",
  initialState: initialExperienceState,
  reducers: {
    getAllExperiences: (
      currentState,
      action: PayloadAction<Experience[]>
    ): ExperienceState => ({
      ...currentState,
      experienceList: [...action.payload],
    }),
    deleteExperience: (
      currentState,
      action: PayloadAction<string>
    ): ExperienceState => ({
      ...currentState,
      experienceList: currentState.experienceList.filter((experience) => {
        return experience.id !== action.payload;
      }),
    }),
    getExperienceById: (
      currentState,
      action: PayloadAction<Experience>
    ): ExperienceState => ({
      ...currentState,
      experience: { ...action.payload },
    }),
  },
});

export const {
  getAllExperiences: getExperienceActionCreator,
  deleteExperience: deleteExperienceActionCreator,
  getExperienceById: getExperienceByIdActionCreator,
} = experiencesSlice.actions;

export const experienceReducer = experiencesSlice.reducer;
