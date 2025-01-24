import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Layout default for user

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <div className="p-8 text-center text-3xl text-red-400">{children}</div>
      <Footer />
    </>
  );
}
