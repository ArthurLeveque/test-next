import prisma from "../../../../utils/prisma";


export default async function handler(req, res) {
    try {
        const comment = await prisma.comment.create({
            data: {
                content: req.body.content,
                userId: req.body.userId,
                postId: req.body.postId
            },
        });
        return res.status(200).json(comment);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}