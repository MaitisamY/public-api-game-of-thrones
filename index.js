import express from "express"; // Importing express from the package
import bodyParser from "body-parser"; // Importing boyy-parser from the package
import axios from "axios"; // Importing Axios from the package

const app = express();
const port = 3000;

app.use(express.static("public")); // Setting static files location
app.use(bodyParser.urlencoded({ extended : true })); // Setting form body to be parsed

const API_URL = "https://www.anapioficeandfire.com/api/";

// Setting the first view
app.get("/", (req, res) => {
    res.render("index.ejs" /* Second parameter is required when form is submitted */);
}); 

app.post("/book", async (req, res) => {
    const id = req.body.id;
    const result = await axios.get(`${API_URL}/books/${id}`);
    console.log(id);
    res.render("books.ejs", {
        id : id,
        name : JSON.stringify(result.data.name),
        authors : JSON.stringify(result.data.authors),
        pages : JSON.stringify(result.data.numberOfPages),
        publisher : JSON.stringify(result.data.publisher),
        released : JSON.stringify(result.data.released),
        country : JSON.stringify(result.data.country),
        mediaType : JSON.stringify(result.data.mediaType)
    });
});

app.listen(port, () => {
    console.log(`Listening at: ${port}`);
});