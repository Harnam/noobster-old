'use strict';

const User = require('./user.model');
const crypto = require('./crypto');

exports.signup = async (req, res) => {
    let user;
    try{
        user = new User(req.body);
        console.log(user);
        await user.validate();
        user.password = await crypto.encrypt(req.body.password);
        console.log(user);
        await user.save();
        return res.send({
            statusCode: 200,
            body: 'signup success'
        });
    } catch(err) {
        return res.status(422).send({
            statusCode: 422,
            error: err
        });
    }
    
}