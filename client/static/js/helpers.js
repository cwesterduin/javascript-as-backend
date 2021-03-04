let listParent = document.querySelector('ul')


async function appendList(data){
    const result = await data
    console.log(result.type)
    makeList(result)
};

async function makeList(data){
    const result = await data
    listParent.innerHTML = ''
    listParent.textContent = result.type.toUpperCase()
    result.collection.forEach(item => {
        let animal = document.createElement('li')
        animal.className = `${result.type}`
        animal.textContent = `Hi, I'm ${item.name}! I'm a ${item.color} ${result.type.slice(0,result.type.length-1)}.`
        listParent.append(animal)
    });
}

module.exports = { appendList }