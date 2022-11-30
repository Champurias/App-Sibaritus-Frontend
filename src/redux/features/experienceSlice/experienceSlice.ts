import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Experience, ExperienceState } from "./types";

export const initialExperienceState: ExperienceState = {
  experienceList: [],
};

const experiencesSlice = createSlice({
  name: "experience",
  initialState: initialExperienceState,
  reducers: {
    getAllExperience: (
      initialState,
      action: PayloadAction<Experience[]>
    ): ExperienceState => ({
      ...initialState,
      experienceList: [...action.payload],
    }),
  },
});

export const { getAllExperience: getExperienceActionCreator } =
  experiencesSlice.actions;

export const experienceReducer = experiencesSlice.reducer;
