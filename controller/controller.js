const people = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name, age, gender } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res
    .status(201)
    .json({ success: true, data: [...people, { name, age, gender }] });
};

const updatePerson = (req, res) => {
  const { name, age, gender } = req.body;
  const { id } = req.params;

  const person = people.find((person) => person.id == id);
  if (!person) {
    return res.status(404).json({ success: false, msg: `${id} is not here ` });
  }
  const newPeople = people.map((person) => {
    if (person.id === id) {
      person.name = req.body.name;
      person.age = req.body.age;
      person.gender = req.body.gender;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id == id);
  if ((!person)) {
    res.status(404).json({
      success: false,
      msg: `this person is not here with this id of ${id}`,
    });
  }
  const newPeople = people.filter((person) => person.id !== id);
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
