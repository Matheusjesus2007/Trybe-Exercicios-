const myobj = [];

function techList(techs, nome) {
    const myArray = techs.sort();
    if (myArray.length === 0) {
        return 'Vazio!'
    }
    for (let index = 0; index < myArray.length; index += 1)
    myobj.push({
    tech:techs[index] ,  name:nome
})
return myobj;
}


module.exports = techList;