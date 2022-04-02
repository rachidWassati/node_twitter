const mongoose = require('mongoose');

mongoose.connect('mongodb://rachid:toto@127.0.0.1:27017/twitter', {
    useNewUrlParser: true,
    useUnifiedTopology: true // <=== important a definir
}).then(() => {
    console.log("connexion etablie !");
}).catch(err => {
    console.log(err);
})