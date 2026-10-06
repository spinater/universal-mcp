import "./globals.css";
export const metadata = { title: "Universal MCP", description: "Dumb demo app" };
export default function RootLayout({ children }) {
  return (<html lang="th"><body>{children}</body></html>);
}
