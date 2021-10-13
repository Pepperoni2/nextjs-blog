import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId:'',
            clientSecret: '',
        })
    ]
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt:{
        secret: 'lkaskdjgcxv',
    },
})