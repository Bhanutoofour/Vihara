import { publicSeoPages, siteUrl } from "@/lib/seo";

export function GET() {
  const pageLinks = publicSeoPages
    .map(
      (page) => `
        <li>
          <a href="${page.path}">${page.title}</a>
          <p>${page.description}</p>
        </li>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sitemap | Vihara - The Courtyard</title>
    <meta
      name="description"
      content="Browse the main pages of Vihara - The Courtyard."
    />
    <style>
      :root {
        color-scheme: light;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        background: linear-gradient(180deg, #f6f2eb 0%, #fffdf9 100%);
        color: #24392f;
      }

      main {
        width: min(960px, calc(100% - 32px));
        margin: 0 auto;
        padding: 56px 0 72px;
      }

      h1 {
        margin: 0 0 12px;
        font-size: clamp(2.25rem, 4vw, 3.5rem);
      }

      .intro {
        margin: 0 0 32px;
        max-width: 720px;
        font: 400 1rem/1.7 Arial, sans-serif;
        color: #4d665a;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 16px;
      }

      li {
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid #e3d7c8;
        border-radius: 20px;
        padding: 20px 22px;
        box-shadow: 0 18px 36px rgba(39, 56, 47, 0.06);
      }

      a {
        color: #1f4636;
        text-decoration: none;
        font: 600 1.1rem/1.4 Arial, sans-serif;
      }

      a:hover {
        text-decoration: underline;
      }

      p {
        margin: 8px 0 0;
        font: 400 0.95rem/1.6 Arial, sans-serif;
        color: #536c60;
      }

      .footer {
        margin-top: 28px;
        font: 400 0.95rem/1.6 Arial, sans-serif;
        color: #5b7467;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Sitemap</h1>
      <p class="intro">
        Browse the main public pages of Vihara - The Courtyard. XML sitemap:
        <a href="/sitemap.xml">${siteUrl}/sitemap.xml</a>
      </p>
      <ul>${pageLinks}
      </ul>
      <p class="footer">Base URL: ${siteUrl}</p>
    </main>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
