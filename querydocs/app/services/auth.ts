import {NextApiRequest, NextApiResponse} from "next";

export default function auth(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        const {email, password} = req.body;
        //Authentication check whether requests are valid
        if(email === "<EMAIL>" && password === "<PASSWORD>"){
            res.status(200).json({message: "Login successful"});
        }
        res.status(401).json({message: "Invalid credentials"});
    }
}
