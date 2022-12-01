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
  },
});

export const { getAllExperiences: getExperienceActionCreator } =
  experiencesSlice.actions;

export const experienceReducer = experiencesSlice.reducer;
