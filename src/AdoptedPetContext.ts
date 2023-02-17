import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
    {
        id: 1337,
        name: "Moto",
        animal: "cat",
        description: "He was Awesome",
        breed: "Street cat",
        images: [],
        city: "Karachi",
        state: "Pakistan",
    },
    () => {},
]);

export default AdoptedPetContext;
