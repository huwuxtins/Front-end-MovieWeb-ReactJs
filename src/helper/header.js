export const header = () => {
    const jwt = localStorage.getItem("jwtToken")
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
    }
}