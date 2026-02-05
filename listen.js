// Starting point here: npm run devStart 
const app = require("./app"); // Invoke our app and return app.listen
const PORT = process.env.PORT || 9090; // Use host port (e.g. Heroku) or fallback locally

app.listen(PORT);
