async function callApi(route){
    try {
        const url = `https://localhost:3000/${route}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data;
    } catch (err) {
        console.log(err)
    }
};

module.exports = { callApi }