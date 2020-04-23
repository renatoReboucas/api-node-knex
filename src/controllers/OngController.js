const connetion = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  
  async index(req, res) {
    const ongs = await connetion('ongs').select('*');
    return res.json(ongs)
  },
  
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
  }
}