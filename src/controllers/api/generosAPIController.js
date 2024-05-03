const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    'list': async (req, res) => {
        try {
            const genres = await db.Genero.findAll()
            res.status(200).json({
                ok: true,
                total: genres.length,
                data: genres
            })
        } catch (err) {
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    }
}

module.exports = genresAPIController;