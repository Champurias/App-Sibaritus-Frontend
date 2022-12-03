import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Experience, ExperienceState } from "./types";

export const initialExperienceState: ExperienceState = {
  experienceList: [],
};

const experiencesSlice = createSlice({
  name: "experience",
  initialState: initialExperienceState,
  reducers: {
    getAllExperiences: (
      initialState,
      action: PayloadAction<Experience[]>
    ): ExperienceState => ({
      ...initialState,
      experienceList: [...action.payload],
    }),
    deleteExperience: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      experienceList: initialState.experienceList.filter((experience) => {
        return experience.id !== action.payload;
      }),
    }),
  },
});

export const {
  getAllExperiences: getExperienceActionCreator,
  deleteExperience: deleteExperienceActionCreator,
} = experiencesSlice.actions;

export const experienceReducer = experiencesSlice.reducer;
