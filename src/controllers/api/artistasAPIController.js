const path = require('path');
const db = require('../../database/models');

const artistasAPIController = {
    'list': async (req, res) => {
        try {
            const artists = await db.Artista.findAll()
            res.status(200).json({
                ok: true,
                total: artists.length,
                data: artists
            })
        } catch (err) {
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    },
    create: async (req, res) => {
        try {
            const { name: nombre } = req.body
            const create = await db.Artista.create({
                nombre
            })
            res.status(201).json({
                ok: true,
                data: create
            })
        }
        catch (err) {
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name: nombre } = req.body;
            const updated = await db.Artista.update({
                nombre,
            },
                {
                    where: {
                        id
                    }
                })
            res.status(200).json({
                ok: true,
            })
        } catch (err) {
            res.status(500).json({
                ok: false,
                msg: err.message
            });

        }
    },
    destroy: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await db.Artista.destroy({
                where: {id}
            })
            res.status(200).json({
                ok: true,
            })
        } catch (err) {
            res.status(500).json({
                ok: false,
                msg: err.message
            });
        }
    }
}

module.exports = artistasAPIController;