import express from "express";
import db from "../db/conn.mjs";

const order = express.Router();

// This section will help you create a new record.
order.post("/", async (req, res) => {
  let collection = await db.collection("orders");
  let result = await collection.insertOne(req.body);
  res.send(result).status(204);
});

export default order;