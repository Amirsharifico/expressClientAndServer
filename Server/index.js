const express = require('express');
const app = express();

const cors = require("cors")
app.use(cors())

app.get('/', (req, res) => {
    res.send([{name: 'name1', age:1}, {name: 'name2', age:2}, {name: 'name3', age:3}])
})

app.listen(3000, () => console.log('Listening to port 3000...'))