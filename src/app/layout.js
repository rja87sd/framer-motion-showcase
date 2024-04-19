import "./styles/globals.css";
import "./styles/sass/main.scss";

export const metadata = {
  title: "Level 3 Week 3 Day 1 Assignment",
  description: "Sass in Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
