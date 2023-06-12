var data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const { id } = req.query;
    const { name, job } = req.body;

    const reg = data.find((d) => d.id.toString() === id);

    reg.name = name;
    reg.job = job;

    res.status(200).send(reg);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error to update user." });
  }
};
