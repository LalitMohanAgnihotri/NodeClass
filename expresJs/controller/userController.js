import userModuels from "../modules/userModules.js";

export const getuser = (req, res) => {
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
