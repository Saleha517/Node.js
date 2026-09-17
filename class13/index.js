const express = require("express");
const app = express();
const port = 3000;
const users = require("./data.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/api/users", (req, res) => {
  res.json(users);
});


//GET

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  res.json(user);
});


//POST 

app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User Created Successfully",
    user: newUser,
  });
});


//UPDATE

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  user.title = req.body.title ?? user.title;
  user.price = req.body.price ?? user.price;
  user.description = req.body.description ?? user.description;

  res.json({
    success: true,
    message: "User Updated Successfully",
    user: user,
  });
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  const deletedUser = users.splice(index, 1);

  res.json({
    success: true,
    message: "User Deleted Successfully",
    user: deletedUser[0],
  });
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
