const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.encrypt = (pass) => {
    return new Promise((resolve, reject) => {

        bcrypt.hash(pass, saltRounds, (err, hash) => {
            if (err) return reject(err);
            return resolve(hash);
        });

    });
}
