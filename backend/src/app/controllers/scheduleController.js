const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(authMiddleware);

const Schedule = require('../models/schedule');

router.post('/register', async (req, res) => {
    const { date, hour } = req.body;

    try {
        if (await Schedule.findOne({ date, hour }))
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
        const { date, hour, title } = req.body;
        const schedule = await Schedule.findByIdAndUpdate(req.params.scheduleId, {
            date, hour, title
        }, {new: true });
        return res.send({ schedule })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});


router.delete('/:scheduleId', async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndRemove({_id: req.params.scheduleId});

        return res.send({ schedule })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

module.exports = app => app.use('/schedule', router);