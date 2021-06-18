import { fetchRequests } from "./dataAccess.js";
import { ButtonClown } from "./ButtonsClown.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonClown()
        }
    )
}

render()