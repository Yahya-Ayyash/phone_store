export class ResponseError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "ResponseError";
        this.statusCode = statusCode;
    }
}

export const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new ResponseError("User not found", 404);
    }
    res.json(user);
  } catch (error) {
    if (error instanceof ResponseError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
