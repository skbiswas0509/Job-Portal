import { Job } from "../models/job.model";

export const postJob = async (req,res) => {
    try {
        const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
        const userId = req.id;

        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !companyId){
            return res.status(404).json({
                message: "Something is missing",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirments.split(","),
            salary: Number(salary),
            location,
            jobType,
            experiencelevel: experience,
            postion,
            company:companyId,
            created_by: userId
        })
        return res.status(201).json({
            message: "New job created successfully",
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAllJobs = async(req,res) => {
    try {
        const keywords = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}},
            ]
        };
        const job = await Job.find(query)
        if(!jobs){
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}


export const getJobById = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId)
        if(!job){
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        };
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAdminJobs = async(req,res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}