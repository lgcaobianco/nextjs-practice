import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../components/layout";

export default function login() {
  return (
    <Layout>
      <Head>
        <title>Login | SpongBob</title>
      </Head>
      <Image
        src="/images/download.png"
        alt="spongebob is telling you to login"
        width={225}
        height={225}
      />
      <div>
        <label name="username">Type username</label>
        <input type="text" placeholder="username" name="username"></input>
        <label name="username">Type password</label>
        <input type="text" placeholder="password" name="password"></input>
      </div>
      <div>
        <Link href="/">
          <a>Click me to go back!!</a>
        </Link>
      </div>
    </Layout>
  );
}
