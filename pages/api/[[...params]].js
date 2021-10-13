
//[[...params]].js == optional Catch all API routes
//can be used if you do not want to have an index.js File
export default function handler(req, res){
    const params = req.query.params         //params refers to the filename
    console.log(params)
    res.status(200).json(params )
}   