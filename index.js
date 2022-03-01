const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const router = require('./routes/admin');

router.use((req,res, next) => {
    if(req.query.isAdmin){
        next();
    }
    res.send("sorry not an admin")
})


app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})