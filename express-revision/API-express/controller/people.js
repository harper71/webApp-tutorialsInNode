
const allUsers = (req, res) => {
  res.status(200).json({success: true, data: people})
}

const createUser =  (req, res) => {
  const {name} = req.body
  log(name);
  if (!name) {
    return res.status(400).json({success: false, msg:'please provide name value'});
  }
  res.status(201).json({success: true, person: name});
}

const UpdateUser = (req, res) => {
  const {id} = req.params
  const {name} = req.body
  console.log(`id to chamge ${id}: new data ${name}`);

  const checkPerson = people.find((person) => person.id === Number(id));

  if (!checkPerson) {
    return res.status(404).json({success: false, msg:'please provide name value'});
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person;
  })
  res.status(200).json({success: true, data: newPeople});

}

const RemoveUser =  (req, res) => {
  const {id} = req.params
  console.log(`id to delete ${id}`);

  const Person = people.find((person) => person.id === Number(id));

  if (!Person) {
    return res.status(404).json({success: false, msg:`no person with id  ${id}`});
  }
  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({success: true, data: newPeople});
}


export {
  allUsers,
  createUser,
  UpdateUser,
  RemoveUser
};