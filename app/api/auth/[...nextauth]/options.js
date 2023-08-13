import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials

        // const user = { id: "42", email: "test", password: "test" };
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return { message: "Invalid email or password" };
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      // console.log(user);
      // console.log(account);
      const { name, email } = user;
      if (account.provider === "google") {
        try {
          await connectDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                }),
              }
            );

            const newUser = await res.json();
            console.log(newUser);
            return newUser;
          }
          console.log(userExists);
          return userExists;
        } catch (error) {}
      }
      // console.log(user);
      // return user;
    },
  },

  pages: {
    signIn: "/auth/signIn",
  },
};
