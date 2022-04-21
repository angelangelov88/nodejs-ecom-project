module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string'
        }, 
        price: {
            type: 'number',
            required: true
        },
        image: {
            type: 'string'
        }
    }
}