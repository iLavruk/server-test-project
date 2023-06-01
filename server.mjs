import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import shops from "./routes/shop.mjs";
import products from "./routes/product.mjs";
import orders from "./routes/order.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/shop", shops);
app.use("/product", products);
app.use("/order", orders);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
