async function callApi(route){
    try {
        const url = `http://localhost:3000/${route}`
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (err) {
        console.log(err)
    }
};

module.exports = { callApi }