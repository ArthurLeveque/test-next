import prisma from "../../../../utils/prisma";

export default async function handler(req, res) {
    try {
        const { id } = req.query
        const post = await prisma.post.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
                author: true,
                comments: {
                    include : {
                        user : true
                    }
                },
            }
        });
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}