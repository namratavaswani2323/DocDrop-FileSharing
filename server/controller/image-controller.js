import File from '../models/file.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,

    }
    console.log('hi');
    try {
        const file = await File.create(fileObj);
        console.log('HI');
        response.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}`});
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

// export const downloadImage = async (request, response) => {
//     try {   
//         const file = await File.findById(request.params.fileId);
        
//         file.downloadContent++;

//         await file.save();

//         response.download(file.path, file.name);
//     } catch (error) {
//         console.error(error.message);
//         response.status(500).json({ msg: error.message });
//     }
// }

export const downloadImage = async (request, response) => {
    try {
        // Find the file by ID
        const file = await File.findById(request.params.fileId);
        
        // Check if the file exists
        if (!file) {
            return response.status(404).send({ message: "File not found" });
        }

        // Increment the download count
        file.downloadContent++;

        // Save the updated file information
        await file.save();

        // Download the file
        response.download(file.path, file.name);
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
        response.status(500).send({ message: "Internal Server Error" });
    }
};
