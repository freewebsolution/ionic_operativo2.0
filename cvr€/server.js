const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public')); //__dir and not _dir
const PORT = 8001; // you can use any port
app.listen(PORT);
console.log(`Server running on port ${PORT}`);