/** @jsx jsx */
import { jsx } from "theme-ui";
import Bio from "../components/Bio";

export default function Article() {
  return (
    <>
      <main>
        <article>
          <header>
            <h1
              sx={{
                margin: "0",
                fontWeight: "900",
                fontSize: 32,
              }}
            >
              Article Title
            </h1>
            <p
              sx={{
                marginTop: "0",
              }}
            >
              September 28th, 2020 • 5 mins read
            </p>
          </header>
          <div>Article Body</div>
          <footer></footer>
        </article>
      </main>
      <aside>
        <Bio />
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href=""
            sx={{
              color: "primary",
            }}
          >
            Link to previous article
          </a>
          <a
            href=""
            sx={{
              color: "primary",
            }}
          >
            Link to next article
          </a>
        </div>
      </aside>
    </>
  );
}
