import { prisma } from "./lib/prisma";

async function main(){
    // const user = await prisma.user.create({
    //     data:{
    //         name: "Shaikh Al Nahian",
    //         email: "nahian@gmail.com",
    //         posts: {
    //             create:{
    //                 title:"hello word",
    //                 content:"This is my first post",
    //                 published: true,
    //             },
    //         },
    //     },
    //     include:{
    //         posts: true,
    //     },
    // })
    // console.log("Created user:",user)
    const allUsers = await prisma.user.findMany({
        include:{
            posts:false,
        },
    });
    console.log("All Users:",JSON.stringify(allUsers,null,2));
}
main().then(async()=>{
    await prisma.$disconnect();
}).catch(async(e)=>{
    console.error(e);
    await prisma.$disconnect()
    process.exit(1);
});