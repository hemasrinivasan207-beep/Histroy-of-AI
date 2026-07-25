export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Error — AI Museum</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: "Space Grotesk", system-ui, sans-serif;
      background: #FBF7F0;
      color: #3A2E39;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
      padding: 2rem;
    }
    h1 { font-size: 3rem; font-weight: 700; }
    p { margin-top: 1rem; color: #8A7A85; font-size: 1rem; }
    a {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.5rem 1.5rem;
      background: #FF6B6B;
      color: white;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div>
    <h1>Something went wrong</h1>
    <p>The AI Anatomy Interface encountered an unexpected error.</p>
    <a href="/">Return to Museum</a>
  </div>
</body>
</html>`;
}
