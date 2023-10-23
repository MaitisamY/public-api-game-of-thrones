import express from "express"; // Importing express from the package
import bodyParser from "body-parser"; // Importing boyy-parser from the package
import axios from "axios"; // Importing Axios from the package

const app = express();
const port = 3000;

app.use(express.static("public")); // Setting static files location
app.use(bodyParser.urlencoded({ extended : true })); // Setting form body to be parsed

// Setting the first view
app.get("/", (req, res) => {
    res.render("index.ejs" /* Second parameter is required when form is submitted */);
}); 


app.listen(port, () => {
    console.log(`Listening at: ${port}`);
});