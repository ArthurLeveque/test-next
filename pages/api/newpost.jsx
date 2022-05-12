import prisma from "../../utils/prisma";


export default async function handler(req, res) {
    try {
        const results = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                authorId: req.body.authorId
            },
        });
        return res.status(200).json(results);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}