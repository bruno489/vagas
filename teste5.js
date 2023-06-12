const data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const { name } = req.query;

    const users = data.filter((user) =>
      user.name.toUpperCase().includes(name.toUpperCase())
    );

    res.status(200).send(`Usuário ${name} foi lido ${users.length} vezes.`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error to find users." });
  }
};
