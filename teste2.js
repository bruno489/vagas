var data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const { name, job } = req.body;

    const id =
      data.sort((a, b) => {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      })[0].id + 1;

    var newUser = { id, name, job };

    data.push(newUser);

    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error to create user." });
  }
};
