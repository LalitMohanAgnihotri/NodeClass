import userModuels from "../modules/userModules.js";

export const getuser = (req, res) => {
  console.log("getuser called");
  res.send(userModuels);
};

export const getuserById = (req, res) => {
  const userId = req.params.id;
  const name = req.query.name;
  const header = req.headers;
  console.log("userId", userId);
  console.log("name", name);
  console.log("header", header);

  userModuels.map((user) => {
    if (user.id == userId) {
      res.send(user);
    }  
  });
};

export const adduser = (req, res) => {
  const userData = req.body;
  console.log("userData", userData);
  res.json({message: "user added successfully", user: userData});
};
console.log("-----------Server is starting...");
