// 'use server';

// import { GetStaticProps } from 'next';
// import prisma from '../../lib/prisma';
// import { User } from '@prisma/client';

// export const createUser = async () => {
//   const user = await prisma.user.create({
//     data: {
//       name: 'John Doe', // Hardcoded name
//       email: 'john2.doe@example.com', // Example email, ensure it's unique
//       admin: false, // Example admin flag
//     },
//   });
//   return {
//     props: { user },
//   };
// };

// export const getUser = async (): Promise<{ user: User | null }> => {
//   const user: User | null = await prisma.user.findFirst();
//   return {
//     user,
//   };
// };
