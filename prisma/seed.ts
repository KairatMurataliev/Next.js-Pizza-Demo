import {prisma} from "./prisma-client";
import { hashSync } from "bcrypt";

async function createData() {
  const promises = [];
  promises.push(prisma.user.createMany({
    data: [
      {
        fullName: 'Kairat Murataliev',
        email: 'admin@test.com',
        password: hashSync('123', 10),
        role: 'ADMIN',
        verified: new Date(),
      },
      {
        fullName: 'Vasya Pupkin',
        email: 'user@test.com',
        password: hashSync('123', 10),
        role: 'USER',
        verified: new Date(),
      }
    ]
  }));

  await Promise.all(promises);
}

async function dropData() {
  const promises = [];
  promises.push(prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`);

  await Promise.all(promises);
}

async function main() {
  try {
    await dropData()
    await createData()
  } catch (err) {
    console.error(err);
  }
}

main().then(async() => {
  await prisma.$disconnect();
})