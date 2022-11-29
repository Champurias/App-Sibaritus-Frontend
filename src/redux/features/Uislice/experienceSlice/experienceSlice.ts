import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Experience from "./types";

export interface ExperienceState {
  experiences: Experience[];
}

export const initialExperienceState: ExperienceState = {
  experiences: [],
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
      experiences: [...action.payload],
    }),
  },
});

export const { getAllExperience: getExperienceActionCreator } =
  experiencesSlice.actions;

export const experienceReducer = experiencesSlice.reducer;
