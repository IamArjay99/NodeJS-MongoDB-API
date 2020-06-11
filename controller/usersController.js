const express = require("express");
const router = express.Router();

const Read = require("./../services/read");
const Create = require("./../services/create");
const Update = require("./../services/update");
const Delete = require("./../services/delete");

// Get all users
router.get("/", async (_, res) => {
  const data = await Read({});
  if (data) {
    res.json({
      msg: "Success",
      data,
    });
  } else {
    res.json({
      msg: "Failed to retrieve",
    });
  }
});

// Create user
router.post("/create", async (req, res) => {
  const { name, age, gender } = req.body;
  const data = { name, age, gender };
  const result = await Create(data);
  if (result) {
    res.json({
      msg: "Inserted successfully",
    });
  } else {
    res.json({
      msg: "Failed to insert",
    });
  }
});

// Read specific user
router.get("/read/:_id", async (req, res) => {
  const { _id } = req.params;
  const filter = { _id };
  const data = await Read(filter);
  if (data) {
    res.json({
      msg: "Success",
      data,
    });
  } else {
    res.json({
      msg: "Failed to retrieve",
    });
  }
});

// Update user
router.put("/update", async (req, res) => {
  const { _id, name, age, gender } = req.body;
  const data = { name, age, gender };
  const filter = { _id };
  const result = await Update(filter, data);
  if (result) {
    res.json({
      msg: "Updated successfully",
    });
  } else {
    res.json({
      msg: "Failed to update",
    });
  }
});

// Delete user
router.delete("/delete", async (req, res) => {
  const { _id } = req.body;
  const filter = { _id };
  const result = await Delete(filter);
  if (result) {
    res.json({
      msg: "Deleted successfully",
    });
  } else {
    res.json({
      msg: "Failed to delete",
    });
  }
});

module.exports = router;
