import * as userService from "../services/userService.js";

export const getUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getAllUsers(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
  