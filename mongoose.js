const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor, insira um nome."],
    },
    age: Number
});

const Person = mongoose.model('Person', personSchema);

const daniel = new Person({ name: "Daniel", age: 25 });

//daniel.save();

Person.find(function (err, people) {
    if (err) {
        console.log(err)
    }
    else {
        people.forEach((person) => console.log(person.name));

    }
});

function createPerson(name, age) {
    const person = new Person({ name: name, age: age });
    person.save().then(function (err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('success')
        }
    });
}

function updateName(id, newName) {
    Person.updateOne({ _id: id }, { name: newName }, function (err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Deu bom')
        }
    });
}

//function dropDB() {
//    mongoose.connection.dropDatabase();
//}

//updateName("625a416332accc713f8a826d", "Xisde");

//createPerson("Cassin", 27);