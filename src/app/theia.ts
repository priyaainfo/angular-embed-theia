import { runApplication } from "./theia-app";

export default function theiaEntry(){
    const element = document.getElementById("theia-container");
    if (element != null) {
        runApplication(element);
    }
}