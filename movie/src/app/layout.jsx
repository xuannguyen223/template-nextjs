import "@/app/globals.css";
import StoreProvider from "./StoreProvider";

// Layout default for user

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <div className="w-full">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
