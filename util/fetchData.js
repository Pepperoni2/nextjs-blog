const baseUrl = "http://localhost:3000" //process.env.NEXT_PUBLIC_BASE_URL

// Request-Handler
// used to redirect to the api functions in the api folder
// ----------------------------------

// ---- GET-Request-Handler ---------
// redirects to the api functions that are used for fetching data from the database
// url => relative path to the api function, token => authorization key, is the user authorized?
export const getData = async (url, token) => { 
    const res = await fetch(`http://localhost:3000/api/${url}`, { // Full path of the api function
        method: 'GET',  // sets the request-methode as the string 'GET'
        headers:{ // The request-header is set 
            'Authorization': token // header contains the authorization token
        }
    })
    // --- the response will be saved as a JSON document
    // The response file is stored in the constant 'data'
    const data = await res.json()
    return data
}

// ---- POST-Request-Handler -------- 
// redirects to the api functions that are used for saving new data in the database
// post => contains the data that will be saved in the database
export const postData = async (url, post, token) => {
    const res = await fetch(`/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // indicates that the request-headers format is JSON
            'Authorization': token
        },
        body: JSON.stringify(post) // The javascript value 'post' is converted to a JSON string
    })

    const data = await res.json()
    return data
}
// ---- PUT-Request-Handler -------- 
export const putData = async (url, post, token) => {
    const res = await fetch(`http://localhost:3000/api/${url}`, {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

// ---- PATCH-Request-Handler -------- 
// redirects to the api functions that are used for changing existing data in the database
export const patchData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

// ---- DELETE-Request-Handler -------- 
// redirects to the api functions that are used for deleting data in the database
export const deleteData = async (url, token) => {
    const res = await fetch(`http://localhost:3000/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}


