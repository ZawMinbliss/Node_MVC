const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

const noAuth = require("./src/routes/noAuth.route");
const itemRoute = require("./src/routes/item.route");
const customerRoute = require("./src/routes/customer.route");
const supplierRoute = require("./src/routes/supplier.route");
const userRoute = require("./src/routes/user.route");
dotenv.config();
const app = express();

//default middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongodb connection
mongoose.connect("mongodb://localhost:27017/kyaw-pos", () =>
  console.log("mongoose connected")
);

//no auth route
app.use("/api", noAuth);

app.use("/api/item", itemRoute);
app.use("/api/customer", customerRoute);
app.use("/api/supplier", supplierRoute);
app.use("/api/user", userRoute);
app.listen(4000, () => console.log(" Alive on 4000"));
