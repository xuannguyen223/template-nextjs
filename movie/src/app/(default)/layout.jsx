import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Layout default for user

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
