import React from "react"
import { providers, signIn, getSession, csrfToken } from "next-auth/client"
export default function SignIn({ providers, csrfToken }) {
  return (
    <container maxW="xl" centerContent>
      <heading as="h1" textAlign="center">
        Welcome to our custom page
      </heading>
      <box alignContent="center" justifyContent="center" marginTop={12}>
        <box className="email-form">
          <form method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Email address
              <input type="text" id="email" name="email" />
            </label>
            <button type="submit">Use your Email</button>
          </form>
        </box>
          {Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            return (
              <box key={provider.name}>
                <button variant="outline" onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </box>
            );
          })}
      </box>
    </container>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};