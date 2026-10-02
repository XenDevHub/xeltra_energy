"use client";

import React from "react";
import { AdminProvider } from "@/context/AdminContext";
import AdminLoginModal from "@/components/AdminLoginModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      {children}
      <AdminLoginModal />
    </AdminProvider>
  );
}
