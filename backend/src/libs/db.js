// import { PrismaClient } from "../generated/prisma/index.js";

// // Node JS doesn't have access to globals by default, so we use globalThis
// const globalForPrisma = globalThis;

// const prisma = globalForPrisma.prisma ?? new PrismaClient();
// // new PrismaClient() -> We are making new instance of PrismaClient(i.e. constructor)

// if(process.env.NODE_ENV !== "production") {
//     globalForPrisma.prisma = prisma;
// }

// export const db = prisma;
// export default db;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const db =
  globalForPrisma.db ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.db = db;
}

export default db;