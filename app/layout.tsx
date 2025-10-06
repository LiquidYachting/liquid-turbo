export const metadata = {
  title: "Liqüid Yachting",
  description: "Excellence Beyond Horizons",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
