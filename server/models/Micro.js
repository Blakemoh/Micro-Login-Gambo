const mongoose = require('mongoose')

const MicroSchema = new mongoose.Schema ({
        email: String

})

const MicroModel = mongoose.model('micros', MicroSchema)
module.exports = MicroModel