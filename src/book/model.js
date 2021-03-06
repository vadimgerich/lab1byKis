import mongoose from 'mongoose';

const bugaltSchema = new mongoose.Schema({
    pib: {
        type:String,
        required: true
    },
    posada:String,
    payment:Number,
    childrenCount:Number,
    stage:Number
});

const Bugalt = mongoose.model("Bugalt", bugaltSchema);

export default Bugalt;