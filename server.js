const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// default route
app.get ('/', (req, res) => {
    res.send('Hello from my AWS ECS Demo App');
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});