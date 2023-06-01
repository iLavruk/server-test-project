import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const product = express.Router();

// This section will help you get a list of all the products.
product.get("/", async (req, res) => {
  const shopId = req.query.shopId;
  let collection = await db.collection("products");
  let results = await collection.find({ shopId }).toArray();
  res.send(results).status(200);
});

// This section will help you get a single product by id
product.get("/:id", async (req, res) => {
  let collection = await db.collection("products");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default product;
