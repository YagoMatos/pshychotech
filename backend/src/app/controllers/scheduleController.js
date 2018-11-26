const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

const Schedule = require('../models/schedule');

router.post('/register', async (req, res) => {
    const { hour, day, mouth } = req.body;

    try {
        if (await Schedule.findOne({ day, hour, mouth, year }))
            return res.status(400).send({ error: 'Horário marcado' });

        const schedule = await Schedule.create(req.body);

        return res.send({schedule})
        
    } catch (err){
        return res.status(400).send({ error: 'Não foi possivel marcar horário!'});
    }
});

router.get('/', async (req, res) => {
    try {
        const schedule = await Schedule.find();

        return res.send({ schedule })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.put('/:scheduleId', async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndUpdate(req.params.patientId);

        return res.send({ schedule })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});


router.delete('/:scheduleId', async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndRemove(req.params.patientId);

        return res.send({ schedule })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

module.exports = app => app.use('/schedule', router);