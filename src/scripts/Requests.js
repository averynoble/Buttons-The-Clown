import { deleteRequest, getRequests } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()

    const convertRequestToListElement = (reserveDate) => {
        return `<li> Parents name:${reserveDate.parentName}, 
        Childs name: ${reserveDate.childName}, 
        Party Location: ${reserveDate.partyAddress}, 
        Reserved Hours: ${reserveDate.reservedTime}
            <button class="request__delete"
                id="request--${reserveDate.id}">
                Delete
            </button>
        </li>`
    }

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `
    return html
}