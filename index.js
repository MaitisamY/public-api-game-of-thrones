import express from "express"; // Importing express from the package
import bodyParser from "body-parser"; // Importing boyy-parser from the package
import axios from "axios"; // Importing Axios from the package

const app = express();
const port = 3000;

app.use(express.static("public")); // Setting static files location
app.use(bodyParser.urlencoded({ extended : true })); // Setting form body to be parsed

const API_URL = "https://www.anapioficeandfire.com/api/";

// Setting the first view
app.get("/", async (req, res) => {
    try {
        res.render("index.ejs");
    }
    catch {
        console.error(500);
    }
    
}); 

app.post("/book", async (req, res) => {
    try {
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
            mediaType : JSON.stringify(result.data.mediaType),
            characters : JSON.stringify(result.data.characters.length)
        });
    }
    catch {
        console.error(401);
    }
});

app.post("/character", async (req, res) => {
    try {
        const id = req.body.id;
        const result = await axios.get(`${API_URL}/characters/${id}`);
        console.log(id);
        res.render("characters.ejs", {
            id : id,
            name : JSON.stringify(result.data.name),
            gender : JSON.stringify(result.data.gender),
            culture : JSON.stringify(result.data.culture),
            born : JSON.stringify(result.data.born),
            died : JSON.stringify(result.data.died),
            aliases : JSON.stringify(result.data.aliases),
            titles : JSON.stringify(result.data.titles),
            books : JSON.stringify(result.data.books.length),
            tvSeries : JSON.stringify(result.data.tvSeries),
            playedBy : JSON.stringify(result.data.playedBy)
        });
    }
    catch {
        console.error(401);
    }
    
});

app.post("/house", async (req, res) => {
    try {
        const id = req.body.id;
        const result = await axios.get(`${API_URL}/houses/${id}`);
        console.log(id);
        res.render("houses.ejs", {
            id : id,
            name : JSON.stringify(result.data.name),
            region : JSON.stringify(result.data.region),
            coatOfArms : JSON.stringify(result.data.coatOfArms),
            words : JSON.stringify(result.data.words),
            titles : JSON.stringify(result.data.titles),
            founder : JSON.stringify(result.data.founder),
            ancestralWeapons : JSON.stringify(result.data.ancestralWeapons)
        });
    }
    catch {
        console.error(401);
    }
});

app.listen(port, () => {
    console.log(`Listening at: ${port}`);
});