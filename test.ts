const myNewObj = {
    name: 'steve',
    car: 'honda',
    state: 'utah'
}

const myNewFunc = (anObject: object) => {
for (const property in anObject){
    console.log(`${property}: ${anObject[property]}`)
}
}