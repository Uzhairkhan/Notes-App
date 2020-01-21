const { User } = require("../models/user");

const authenticateUser = (req, res, next) => {
  const token = req.headers["x-auth"];
  User.findbyToken(token)
    .then((user) => {
      if (user) {
        req.user = user;
        req.token = token;
        next();
      } else {
        res.status("401").send("Invalid token");
      }
    })
    .catch(function(err) {
      res.status("401").send(err);
    });
};

module.exports = {
  authenticateUser
};
