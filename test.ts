const myNewObj = {
    name: 'steve',
    car: 'ford',
    state: 'california'
}

const myNewFunc = (anObject: object) => {
for (const property in anObject){
    console.log(`${property}: ${anObject[property]}`)
}
}