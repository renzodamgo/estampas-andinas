import "./globals.css";

export const metadata = {
  title: "Estampas Andinas Radio por Orestes Damian",
  description:
    "Una radio tarmeña con tu música de siempre y los comentarios de Orestes Damian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
