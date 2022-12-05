import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockExperienceCreation from "../../mocks/mockExperienceCreation";
import renderWithProviders from "../../utils/testUtils/renderwithProvider";
import ExperienceForm from "./ExperienceForm";

const mockCreationAction = jest.fn();

jest.mock("../../hooks/useExperience/useExperience", () => {
  return () => ({
    createExperience: mockCreationAction,
  });
});

describe("Given a Experience component", () => {
  describe("When its render", () => {
    test("Then it should show inpust elements", () => {
      const expectedTotalInputs = 6;

      renderWithProviders(<ExperienceForm />);

      const formInput = screen.queryAllByRole("textbox");

      expect(formInput).toHaveLength(expectedTotalInputs);
    });
  });
  describe("When you click on the button add new experience", () => {
    test("Then the form ahould be submitted", async () => {
      const buttonText = "Crea tu experiencia";
      const labelTitle = "Title:";
      const labelPicture = "Picture:";
      const labelOwner = "Owner:";
      const labelLocation = "Location:";
      const labeldetail = "Detail:";
      const experienceDataInputs = mockExperienceCreation;

      renderWithProviders(<ExperienceForm />);
      const titleInput = screen.queryByLabelText(labelTitle)!;
      await userEvent.type(titleInput, experienceDataInputs.title);
      const imageInput = screen.queryByLabelText(labelPicture)!;
      await userEvent.type(imageInput, experienceDataInputs.picture);
      const ownerInput = screen.queryByLabelText(labelOwner)!;
      await userEvent.type(ownerInput, experienceDataInputs.owner);
      const locationInput = screen.queryByLabelText(labelLocation)!;
      await userEvent.type(locationInput, experienceDataInputs.location);

      const detailInput = screen.queryByLabelText(labeldetail)!;
      await userEvent.type(detailInput, experienceDataInputs.detail);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockCreationAction).toHaveBeenCalled();
    });
  });
});
