import { sendRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const reserveParentName = document.querySelector("input[name='parentName']").value
        const reserveChildName = document.querySelector("input[name='childName']").value
        const reserveNumOfChildren = document.querySelector("input[name='numOfChildren']").value
        const reservePartyAddress =document.querySelector("input[name='partyAddress']").value
        const reservedDate = document.querySelector("input[name='reservationDate']").value
        const reservedHours = document.querySelector("input[name='reservedHours']").value

        const dataToSendToAPI = {
            parentName: reserveParentName,
            childName: reserveChildName,
            numOfChildren: reserveNumOfChildren,
            partyAddress: reservePartyAddress,
            partyDate: reservedDate,
            reservedTime: reservedHours
        }
        sendRequest(dataToSendToAPI)
    }
})

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>

        <div class="field">
            <label class="label" for="numOfChildren">How many children attending</label>
            <input type="number" name="numOfChildren" class="input" />
        </div>

        <div class="field">
            <label class="label" for="partyAddress">Address of party</label>
            <input type="text" name="partyAddress" class="input" />
        </div>

        <div class="field">
            <label class="label" for="reservationDate">Date of reservation</label>
            <input type="date" name="reservationDate" class="input" />
        </div>

        <div class="field">
            <label class="label" for="reservedHours">Length of reservation</label>
            <input type="number" name="reservedHours" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
        `
    return html
}