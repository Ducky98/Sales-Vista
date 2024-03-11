// Dependencies
const router = require('express').Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');

router.post('/', async (req, res) => {
    // console.log(req.body)
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: 'User with this Email not found' });
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        )
        if (!validPassword)
            return res.status(401).send({ message: 'Invalid Password' });

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: 'Login Success' });
    }
    catch (error) {
        res.send({ message: 'Internal Server Error!' });
    }
})

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password')
    });
    return schema.validate(data);
}

module.exports = router;