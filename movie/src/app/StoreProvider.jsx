"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);

  useEffect(() => {
    if (!storeRef.current) {
      // Tạo store lần đầu khi component mount
      storeRef.current = store();
    }
  }, []); // Chạy chỉ một lần khi component mount

  if (!storeRef.current) {
    return null; // Hoặc có thể render loading state cho đến khi store được khởi tạo
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
