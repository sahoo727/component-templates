import Location from "../models/Location.js";

export const postName = async(req, res, next) =>{
    try {
        const newName = new Location({...req.body});
        const savedName = await newName.save();
        res.status(200).json(savedName)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "Some issues occured!! please try again"})
        next(error);
    }
}