const originalObject = {
    firstName: 'Rick',
    lastName: 'Sanchez',
    companions: [{
        firstName: 'Morty',
        lastName: 'Smith'
    }]
}


const onChange = (object, callback) => {
    const handler = {
        get(target, property, receiver) {
            console.log(`GET `, property)
            const value = Reflect.get(...arguments)
            if (typeof value === 'object') {
                return new Proxy(value, handler)
            }
            return value
        },
        defineProperty(target, property, value, receiver) {
            callback()
            console.log(`SET ${property}: ${value}`)

            return Reflect.set(...arguments)
        },
        deleteProperty(target, property) {
            callback()
            console.log(`DELETE ${property}`)
            return Reflect.deleteProperty(...arguments)
        }
    }

    return new Proxy(originalObject, handler)
}



const watchedObj = onChange(originalObject, () => { console.log('CHANGE') })

watchedObj.firstName = 'dave'

delete watchedObj.lastName

watchedObj.companions[0].firstName = 'Beth'


