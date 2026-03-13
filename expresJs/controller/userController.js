import userModuels from "../modules/userModules.js";

export const getuser = (req, res) => {
  console.log("getuser called");
  res.send(userModuels);
};

export const getuserById = (req, res) => {
  const userId = req.params.id;
  userModuels.map((user) => {
    if (user.id == userId) {
      res.send(user);
    }  
  });
};

export const adduser = (req, res) => {
  console.log("req",req.body);
  res.json(req.body);
};
console.log("-----------Server is starting...");
