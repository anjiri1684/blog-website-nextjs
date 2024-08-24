function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid inputs" });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    res
      .status(201)
      .json({ message: "Succesfully stored message!", message: newMessage });
  }
}

export default handler;
