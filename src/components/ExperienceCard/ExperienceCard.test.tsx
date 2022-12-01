import { render, screen } from "@testing-library/react";
import { Experience } from "../../redux/features/experienceSlice/types";
import ExperienceCard from "./ExperienceCard";

describe("Given a Experience component", () => {
  describe("When is renderd with Experience 'cata de quesos'", () => {
    test("Then it should show a level 2 heading with 'cata de quesos and imagen'", () => {
      const experience: Experience = {
        detail: "",
        owner: "",
        location: "",
        picture: "",
        pictureBackUp: "",
        price: 12,
        title: "cata de quesos",
        _id: "",
      };

      const expectedproperty = "alt";
      const expectedAlt = `Experience ${experience.title}`;

      render(<ExperienceCard experience={experience} />);

      const experienceCardTitle = screen.queryByRole("heading", {
        name: experience.title,
        level: 2,
      });

      const experienceCardImage = screen.queryByRole("img");

      expect(experienceCardTitle).toBeInTheDocument();
      expect(experienceCardImage).toHaveProperty(expectedproperty, expectedAlt);
    });
  });
});
