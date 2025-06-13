// src/app/layout.jsx
export const metadata = {
  title: 'Dustin Jones | AI Outreach Specialist',
  description: 'Landing page for NyneCom application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
