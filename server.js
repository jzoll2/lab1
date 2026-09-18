import express from "express";

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get("/about-me", (req, res) => {
  res.send("About me");
});

app.get("/info", (req, res) => {
  res.send("I am a CS major!");
});

app.get("/home", (req, res) => {
  res.send("Home!");
});

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.get('/projects', (req, res) => {
  const tag = req.query.tag || 'fallback';

  const filteredProjects = tag === 'fallback'
    ? projects
    : projects.filter(project => project.tag === tag);

  res.send(filteredProjects);
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
