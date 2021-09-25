const mongoose = require('mongoose');
const Task = mongoose.model('task');

const create = (req, res) => {
    const { title, description } = req.body;

    if(!title || !description) {
        res.status(422).json({ error: 'Field is empty!' });
    }

    const task = new Task({
        title,
        description
    })
    task.save()
        .then((results) => {
            res.status(201).json({ results });
        })
        .catch((error) => {
            console.log(error);
            res.status(401).json({ error: error });
        })
}

const readAll = (req, res) => {
    Task.find()
        .then((results) => {
            res.status(200).json({ results });
        }, (error) => {
            console.log(error);
            return res.status(401).json({ error });
        })
}
const readOne = (req, res) => {
    Task.findOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json({ result })
        }, error => {
            console.log(error);
            return res.status(401).json({ error });
        })
}

const update = (req, res) => {
    if(!req.body) {
        res.status(422).json({ error: 'Field is empty!' });
    }

    const _id = req.params.id

    Task.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${_id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + _id
            });
        });
}

const deleteOneTask = (req, res) => {
    Task.deleteOne({ _id: req.params.id }, (error, doc) => {
        if(error) {
            console.log(error);
            return res.status(401).json({ error });
        } else {
            res.status(200).json({ doc })
        }
    })
}
const deleteAll = () => {
    Task.deleteMany({})
        .then(results => {
            res.status(200).json({ results })
        }, (error) => {
            console.log(error);
            return res.status(401).json({ error });
        })
}

module.exports = {
    create,
    readAll,
    readOne,
    update,
    deleteOneTask,
    deleteAll
};
