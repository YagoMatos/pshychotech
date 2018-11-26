const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(authMiddleware);

const Patient = require('../models/patient');

router.post('/register', async (req, res) => {
    const { cpf } = req.body;

    try {
        if (await Patient.findOne({ cpf }))
            return res.status(400).send({ error: 'Paciente já cadastrado' });

        const patient = await Patient.create(req.body);

        return res.send({patient})
        
    } catch (err){
        return res.status(400).send({ error: 'Não foi possivel cadastrar Paciente!'});
    }
});

router.get('/:patientId', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId);

        return res.send({ patient })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.get('/', async (req, res) => {
    try {
        const patient = await Patient.find();

        return res.send({ patient })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.get('/search/:name', async (req, res) => {
    try {
        const patient = await Patient.find({ name: req.params.name });

        return res.send({ patient })
    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

router.put('/:patientId', async (req, res) => {
    try {
        const { name, rg, cpf, email, enable } = req.body;
        const patient = await Patient.findByIdAndUpdate(req.params.patientId, {
            name, rg, cpf, email, enable
        }, {new: true });

        return res.send({ patient })

    } catch (err){
        return res.status(400).send({ error: 'Tente mais tarde'})
    }
});

module.exports = app => app.use('/patient', router);