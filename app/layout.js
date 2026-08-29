export const metadata = {
  title: "DevOps Next.js App",
  description: "Next.js deployed using Docker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
