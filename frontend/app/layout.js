export const metadata = {
  title: 'Cloudflare Tunnel Test App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: '2rem' }}>
        {children}
      </body>
    </html>
  );
}
