import { runApplication } from "./theia-app";

export default function theiaEntry(){
    const element = document.getElementById("react-container");
    if (element != null) {
        runApplication(element);
    }
}