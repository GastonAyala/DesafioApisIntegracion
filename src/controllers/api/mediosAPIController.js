const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': async (req, res) => {
        try {
            const medias =  await db.Medio.findAll()
            res.status(200).json({
                ok: true,
                total: medias.length,
                data: medias
            });
        } catch (err) {
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    }
}
module.exports = mediosAPIController;