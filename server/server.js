const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("DMRC Water Dashboard API");
});

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});


require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongo Connected");
        console.log("Database:", mongoose.connection.name);
    })
    .catch(err => console.log(err));




const dashboardRoute = require("./routes/dashboard");

app.use("/api/dashboard", dashboardRoute);



const stationRoute = require("./routes/stations");

app.use("/api/stations", stationRoute); 



const analyticsRoute = require("./routes/analytics");

app.use("/api/analytics", analyticsRoute);


const borewellRoute = require("./routes/borewells");

app.use("/api/borewells", borewellRoute);


const rwhRoute = require("./routes/rwh");
app.use("/api/rwh", rwhRoute);



const insightsRoute = require("./routes/insights");
app.use("/api/insights", insightsRoute);


const exportRoute = require("./routes/export");
app.use("/api/export", exportRoute);