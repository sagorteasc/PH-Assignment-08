import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://sagorteasc-readhub.vercel.app"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()