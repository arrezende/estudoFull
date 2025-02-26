const { request } = require('express')
const connection = require('../database/connections')

module.exports = {
    async create(request, response){

        const {id} = request.body

        const ong = await connection('ongs').where('id', id).select('name').first()

        if(!ong){
            return response.status(400).json({error: 'Deu ruim, n encontrei nada'})
        }

        return response.json(ong)

    }
}