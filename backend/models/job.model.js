import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    decription:{
        type:String,
        required:true
    },
    requirements:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    },
    experienceLevel:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    application:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company"
    }
},{timestamps:true});
export const Job = mongoose.model("Job", jobSchema);