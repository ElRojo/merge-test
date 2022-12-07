const myNewObj = {
    name: 'tom',
    car: 'ford',
    state: 'california'
}

const myNewFunc = (anObject: object) => {
for (const property in anObject){
    console.log(`${property}: ${anObject[property]}`)
}
}