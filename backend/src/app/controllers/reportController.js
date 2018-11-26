const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

const Report = require('../models/report');

router.delete('/:reportId', async (req, res) => {
    try {
        const report = await Report.findByIdAndRemove(req.params.reportId);

        return res.send({ ok: true })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.put('/:reportId', async (req, res) => {
    try {
        const report = await Report.findByIdAndUpdate(req.params.reportId);

        return res.send({ report })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.get('/', async (req, res) => {
    try {
        const report = await Report.findById();

        return res.send({ report })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

module.exports = app => app.use('/report', router);