const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, interest, message } = req.body;
    console.log("name : " + name);
  console.log("email : " + email);
  console.log("email : " + interest);
    console.log("email : " + message);

    const newContact = new Contact({
      name,
      email,
      interest,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getContacts = async (req, res) => {
  console.log('test 1')
  try {
  console.log('test 32')

    const contacts = await Contact.find().sort({ date: -1 });
  console.log('test 4' + contacts)

    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
