const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../models/users");

//routes
router.post("/add/user", async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  // Check if a user with the same email already exists
  user.findOne({ email: email }).then((existingUser) => {
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      // Create a new user object with the hashed password
      const newUser = new user({
        first_name,
        last_name,
        email,
        phone,
        password: hash, // Store the hashed password in the database
      });

      newUser
        .save()
        .then(() => {
          console.log("Successfully added user to mongodb");
          res.redirect("/");
        })
        .catch((err) => console.log(err));
    });
  });
});

module.exports = router;
