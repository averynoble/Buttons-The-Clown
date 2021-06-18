import { Requests } from "./Requests.js"
import { ServiceForm } from "./ReserveForm.js"

export const ButtonClown = () => {
    return `
        <h1>Buttons The Clown</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Reserving Buttons</h2>
            ${Requests()}
        </section>
    `
}