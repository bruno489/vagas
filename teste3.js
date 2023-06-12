var data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const { name } = req.query;

    const idxUser = data.findIndex(
      (user) => user.name.toUpperCase() === name.toUpperCase()
    );

    if (idxUser > -1) data.splice(idxUser, 1);

    res.send(idxUser > -1 ? "success" : "User not found");
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error to delete user." });
  }
};
