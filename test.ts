const myNewObj = {
    name: 'steve',
    car: 'toyota',
    state: 'utah'
}

const myNewFunc = (anObject: object) => {
for (const property in anObject){
    console.log(`${property}: ${anObject[property]}`)
}
}