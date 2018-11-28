const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(authMiddleware);

const Report = require('../models/report');

router.post('/register', async (req, res) => {
    const { date } = req.body;

    try {
        if (await Report.findOne({ date }))
            return res.status(400).send({ error: 'Relatório já cadastrado' });

        const report = await Report.create(req.body);

        return res.send({report})
        
    } catch (err){
        return res.status(400).send({ error: 'Não foi possivel cadastrar Relatório!'});
    }
});

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
        const { description, title, date, patientId } = req.body;
        const report = await Report.findByIdAndUpdate(req.params.reportId, {
            description, title, date, patientId
        }, {new: true });

        return res.send({ report })

    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.get('/:patientId', async (req, res) => {
    try {
        const report = await Report.find({ patientId: req.params.patientId });

        return res.send({ report })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.get('/', async (req, res) => {
    try {
        const report = await Report.find();

        return res.send({ report })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});


router.delete('/:reportId', async (req, res) => {
    try {
        const report = await Report.findByIdAndRemove({_id: req.params.reportId});

        return res.send({ report })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

module.exports = app => app.use('/report', router);