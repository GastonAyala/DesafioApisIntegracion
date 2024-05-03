const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    'list': async (req, res) => {
        try {
            const albumes = await db.Album.findAll({
                include: ['artista']
            })
            res.status(200).json({
                ok: true,
                total: albumes.length,
                data: albumes
            })
        } catch (err) {
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    },
    'detail': async (req, res) => {
        try {
            const album = await db.Album.findAll({
                where: {
                    id_artista: req.params.id
                }
            })
            res.status(200).json({
                ok: true,
                data: album
            })
        } catch (err) {
            res.status(500).json({
                ok:false,
                msg: err.message
            });
        }
    }
}

module.exports = albumesAPIController;