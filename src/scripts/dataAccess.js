const applicationState = {
    "reserveDate": [],
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/reserveDate`)
    .then(response => response.json())
    .then(
        (serviceRequests) => {
            applicationState.reserveDate = serviceRequests
        }
    )
}

export const getRequests = () => [...applicationState.reserveDate]

export const sendRequest = (userServiceRequest) => {
    const mainContainer = document.querySelector("#container");
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/reserveDate`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/reserveDate/${id}`, { method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}