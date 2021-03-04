let listParent = document.querySelector('ul')


async function appendList(data){
    const result = await data
    console.log(result.type)
    // listCont.textContent = JSON.stringify(result)
    // console.log(result)
    makeList(result)
};

async function makeList(data){
    const result = await data
    listParent.innerHTML = ''
    listParent.textContent = result.type
    result.collection.forEach(item => {
        let animal = document.createElement('li')
        animal.className = `${result.type}`
        animal.textContent = `Hi, I'm ${item.name}! I'm a ${item.color} ${result.type.slice(0,result.type.length-1)}.`
        listParent.append(animal)
    });
}

module.exports = { appendList }