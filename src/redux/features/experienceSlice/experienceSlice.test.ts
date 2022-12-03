import mockExperience from "../../../mocks/mockExperience";
import {
  deleteExperienceActionCreator,
  experienceReducer,
  getExperienceActionCreator,
} from "./experienceSlice";
import { Experiences, ExperienceState } from "./types";

describe("Given a slice experienceSlice", () => {
  describe("When is invoked and receives a initial state and getExperience action payload", () => {
    test("Then it should return a new state", () => {
      const expectExperienceList: Experiences = [
        {
          id: "",
          owner: "",
          title: "",
          picture: "",
          pictureBackUp: "",
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

  describe("When it receives an initial state with a list {of experiences and a deleexperience action with a expereince id", () => {
    test("Then it should  return a new estate", () => {
      const currentExperienceState: ExperienceState = {
        experienceList: mockExperience,
      };
      const experienceToDelete = mockExperience[1];
      const deleteExperience = deleteExperienceActionCreator(
        experienceToDelete.id as string
      );
      const expectedRecipesState: ExperienceState = {
        experienceList: [mockExperience[0]],
      };

      const newExperiencesState = experienceReducer(
        currentExperienceState,
        deleteExperience
      );

      expect(newExperiencesState).toStrictEqual(expectedRecipesState);
    });
  });
});
