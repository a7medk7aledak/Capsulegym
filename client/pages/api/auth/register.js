import dbConnect from "../../../../server/lib/dbConnect";
import User from "../../../../server/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  try {
    const {
      firstName,
      lastName,
      email,
      password,
      telephone,
      age,
      country,
      gender,
    } = req.body;

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !telephone ||
      !age ||
      !country ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password, // Note: In a real application, hash this password before saving
      telephone,
      age,
      country,
      gender,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
