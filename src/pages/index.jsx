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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div>
          <h2
            sx={{
              color: "primary",
              margin: "0",
              fontWeight: "800",
              fontSize: [4, 5],
            }}
          >
            <a
              sx={{
                cursor: "pointer",
              }}
            >
              State Management in React
            </a>
          </h2>
          <p
            sx={{
              margin: "0",
              fontSize: 0,
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
      <Bio />
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
