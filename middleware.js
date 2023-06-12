const { verify, sign } = require("jsonwebtoken");

const getJWT = (req, res, next) => {
  try {
    const jwt = sign({}, process.env.JWT_TOKEN);
    // Retorna o jwt que será informado no header autorization da requisição
    // formato: 'Bearer [token]'

    res.status(200).send(jwt);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error to encript JWT." });
  }
};

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const [, token] = authHeader.split(" ");

      verify(token, process.env.JWT_TOKEN, async (error, tk) => {
        if (error) {
          console.error("Fail to validate JWT.");
          return res.status(401).send({ message: "Authentication error." });
        }

        next();
      });
    } else {
      return res.status(401).send("Unauthorized. Authentication error!");
    }
  } catch {
    return res.status(401).send("Unauthorized. Authentication error!");
  }
};

module.exports = { authMiddleware, getJWT };
