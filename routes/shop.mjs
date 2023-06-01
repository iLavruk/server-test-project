import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const shop = express.Router();

// This section will help you get a list of all the shops.
shop.get("/", async (req, res) => {
  let collection = await db.collection("shops");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single shop by id
shop.get("/:id", async (req, res) => {
  let collection = await db.collection("shops");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default shop;