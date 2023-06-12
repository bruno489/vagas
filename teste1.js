var data = require("./fakeData");

const getUser = (req, res, next) => {
  try {
    const { name } = req.query;

    const userData = data.find((user) =>
      user.name.toUpperCase().includes(name.toUpperCase())
    );

    res.status(200).send(userData);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error to find user." });
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
