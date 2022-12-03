import { ExperienceState } from "../redux/features/experienceSlice/types";

const mockExpecienceState: ExperienceState = {
  experienceList: [
    {
      id: "6385f92759fac43576020b2b",
      owner: "chebu",
      title: "cata de quesos",
      picture:
        "https://www.lagourmeta.com/modules/ph_simpleblog/featured/47.jpg",
      pictureBackUp: "",
      location: "N@omi",
      price: 12,
      detail: "Characters",
    },

    {
      id: "6385fda659fac43576020b2c",
      owner: "Ayuntamiento de Barcelona",
      title: "calcot",
      picture:
        "https://elmundoenrecetas.s3.amazonaws.com/uploads/recipe/picture/401/I…",
      pictureBackUp: "",
      location: "N@omi",
      price: 34,
      detail: "Characters",
    },
  ],
};

export default mockExpecienceState;
