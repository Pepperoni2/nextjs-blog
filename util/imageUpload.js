
// ----Image Upload----
// function for uploading images to the cloud-mediaserver
export const ImageUpload = async (images) => { // input parameter, could be an array of images
    let imgArr = []
    for(const item of images){
        const formData = new FormData() // constructs value pairs for the image-upload
        formData.append("file", item) // appending file to the constant 'formData'
        // appending the upload preset for the file
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUD_UPDATE_PRESET)
        // appending the name of the cloud
        formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME)
        // The image is saved in the cloud, using a POST-Request
        const res = await fetch(process.env.NEXT_PUBLIC_CLOUD_API, { // API-Key for connecting to the database
            method: "POST",
            body: formData
        })

        const data = await res.json()
        // pushes the data in an object-array, containg important image data
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr; 
}