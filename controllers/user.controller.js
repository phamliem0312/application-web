const db = require("../models");
const User = db.users;
const bcrypt = require('bcryptjs');
const middlewares = require('../middlewares');

exports.create = async (req, res) => {
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    let hashPass = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        password: hashPass,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};
exports.findAll = (req, res) => {

};
exports.findOne = (req, res) => {

};
exports.update = (req, res) => {

};
exports.delete = (req, res) => {

};
exports.deleteAll = (req, res) => {

};
exports.findAllPublished = (req, res) => {

};