/** @jsx jsx */
import { jsx } from "theme-ui";

import Head from "next/head";
import Bio from "../components/Bio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bio />
      <main>
        <div>
          <h2
            sx={{
              color: "primary",
              margin: "0",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: 32,
            }}
          >
            <a>State Management in React</a>
          </h2>
          <p
            sx={{
              margin: "0",
            }}
          >
            September 28th, 2020 • 5 mins read
          </p>
          <div
            sx={{
              marginTop: "15px",
            }}
          >
            Post introduction
          </div>
        </div>
      </main>
      <footer>
        <a
          href="https://twitter.com/fasoroalexander"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary",
            marginRight: "10px",
          }}
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-fasoro-joseph/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary",
          }}
        >
          Linkedin
        </a>
      </footer>
    </div>
  );
}
