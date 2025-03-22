const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = require("../models/user"); // Import User model

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: "brian01kimathi@gmail.com",
    pass: "vfflitkajyjfbfhs",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server Ready to Send Emails!");
  }
});

// REGISTER ROUTE (With Email Verification)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      email_verified: false, // User not verified initially
      verification_token: verificationToken,
    });

    // Send verification email
    const verificationLink = `http://localhost:3000/api/user/verify/${verificationToken}`;

    transporter.sendMail({
      from: '"TuChat Support" <test@codewithsky.co.ke>',
      to: email,
      subject: "Verify Email - TuChat",
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center; background-color: #f4f4f4;">
      <div style="max-width: 500px; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin: auto;">
        <h2 style="color: #333;">Welcome to TuChat! 🎉</h2>
        <p style="color: #555;">You're almost there! Click the button below to verify your email and complete your registration.</p>
        <a href="${verificationLink}" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-top: 15px;">
          Verify Email
        </a>
        <p style="color: #777; font-size: 14px; margin-top: 20px;">If you didn't create an account, please ignore this email.</p>
      </div>
    </div>
  `
    }, (error, info) => {
      if (error) {
        console.error("❌ Email Send Error:", error);
      } else {
        console.log("✅ Email Sent:", info.response);
      }
    });

    res.status(201).json({
      message: "User registered successfully. Check your email for verification.",
      user: newUser,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// EMAIL VERIFICATION ROUTE
router.get("/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;
    console.log("Received Token:", token);

    const user = await User.findOne({ where: { verification_token: token } });
    if (!user) {
      console.log("User not found for token:", token);
      return res.status(400).send("<h2>Invalid or expired token</h2>");
    }

    console.log("User Found:", user);

    await user.update({ email_verified: true, verification_token: null });

    console.log("User updated successfully.");

    // Redirect to login page with a success message
    res.redirect("http://localhost:5173/login?setSuccess=Email verified successfully! You can now log in.");
  } catch (error) {
    console.error("Verification Error:", error);
    res.status(500).send("<h2>Internal server error</h2>");
  }
});

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// FORGOT PASSWORD ROUTE
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete current password
    await user.update({ password: null });

    // Generate password reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Save the token in the database
    await user.update({ verification_token: resetToken });

    // Reset Password Link
    const resetLink = `http://localhost:5173/reset-password?token=${resetToken}`;

    // Send email with reset link
    transporter.sendMail(
      {
        from: '"TuChat Support" <test@codewithsky.co.ke>',
        to: email,
        subject: "Reset Your Password - TuChat",
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center; background-color: #f4f4f4;">
          <div style="max-width: 500px; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin: auto;">
            <h2 style="color: #333;">Reset Your Password</h2>
            <p style="color: #555;">We received a request to reset your password. Click the button below to proceed.</p>
            <a href="${resetLink}" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-top: 15px;">
              Reset Password
            </a>            
          </div>
        </div>
      `,
      },
      (error, info) => {
        if (error) {
          console.error("❌ Email Send Error:", error);
        } else {
          console.log("✅ Reset Password Email Sent:", info.response);
        }
      }
    );

    res.json({
      message: "Password reset link sent to your email.",
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// RESET PASSWORD ROUTE
router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required" });
    }

    const user = await User.findOne({ where: { verification_token: token } });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password and clear the reset token
    await user.update({ password: hashedPassword, verification_token: null });

    // Redirect with an alert
    res.send(`
      <script>
        alert("Password reset successfully. You can now log in.");
        window.location.href = "http://localhost:5173/login";
      </script>
    `);
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).send("<script>alert('Internal server error'); window.history.back();</script>");
  }
});

// GET USER PROFILE
router.get("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: { exclude: ["password"] } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Profile Fetch Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// UPDATE PROFILE
router.put("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, avatar } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.update({ name, email, avatar });

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Profile Update Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// CHANGE PASSWORD
router.put("/change-password/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect current password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hashedPassword });

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Change Password Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE ACCOUNT
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Delete Account Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
