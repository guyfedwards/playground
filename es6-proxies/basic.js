const originalObject = {
    firstName: 'Rick',
    lastName: 'Sanchez',
    companions: {
        sidekick: {
            firstName: 'Morty',
            lastName: 'Smith'
        }
    }
}

const handler = {
    get(target, property, receiver) {
        console.log(`GET ${property}`)
        if (property in property) {
            return target[property]
        }

        return `Property not found in ${Object.keys(receiver)}`
    }
}

const proxiedObject = new Proxy(originalObject, handler)

console.log(proxiedObject.firstName)
console.log(proxiedObject.size)

