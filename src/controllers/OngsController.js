const crypto = require('crypto')
const connection = require('../database/connections')

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },
    async create(request, response ){
        const {name, email, whatsapp, city, uf } = request.body
        const id = crypto.randomBytes(4).toString('hex')
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        // console.log(request.body)
    
    
        return response.json({id})
    },

   
}