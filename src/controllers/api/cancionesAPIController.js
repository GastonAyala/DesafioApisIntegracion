const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list': async (req, res) => {
        try {
            const songs = await db.Cancion.findAll({
                include: ['genero', 'medio']
            })
            res.status(200).json({
                ok: true,
                total: songs.length,
                data: songs
            })
        } catch {
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    }
}

module.exports = cancionesAPIController;