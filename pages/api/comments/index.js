import { comments } from "../../../data/comment";

export default function handler(req, res){
    if(req.method == 'GET'){
        res.status(200).json(comments);
    }
    else if(req.method == 'POST'){
        const comment = req.body.comment    //comment refers to the propertiy body in the comments page
        const newComment = {
            id: Date.now(),                 // Easiest way to have an unique id during development
            text: comment                   // text is the comment that req.method POST has received
        }
        comments.push(newComment)               //Push new data into the data array
        res.status(201).json(newComment)
    }
}
