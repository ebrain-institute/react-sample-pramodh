import { createContext } from "react";

const User = {
    name: 'Jhon',
    age: 45
}


export const DashBoardContext = createContext(User);