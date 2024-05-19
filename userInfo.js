function createUserProfiles(names,modifiedNames) {
    return names.map((name,index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    })); 
}

console.log(createUserProfiles(['Maxwell','Clement'], ['MAXWELL', "clement"]));

module.exports = { createUserProfiles };