import {
  experienceReducer,
  getExperienceActionCreator,
} from "./experienceSlice";
import { Experiences, ExperienceState } from "./types";

describe("Given a slice experienceSlice", () => {
  describe("When is invoked and receives a initial state and getExperience action payload", () => {
    test("Then it should return a new state", () => {
      const expectExperienceList: Experiences = [
        {
          _id: "",
          owner: "",
          location: "",
          price: 12,
          detail: "",
        },
      ];
      const expectedState: ExperienceState = {
        experienceList: expectExperienceList,
      };
      const initialState: ExperienceState = {
        experienceList: [],
      };

      const newStateExperience = experienceReducer(
        initialState,
        getExperienceActionCreator(expectExperienceList)
      );
      expect(newStateExperience).toStrictEqual(expectedState);
    });
  });
});
