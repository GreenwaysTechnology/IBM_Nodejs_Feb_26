import { prisma } from "../lib/prisma.ts";


async function main() {
    try {
        //primsa.
        const users = await prisma.user.findMany();
        console.log(users)
    }
    catch (err) {
        console.log(err)
    }
}
main()
