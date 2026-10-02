"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AdminContextType {
  isAdmin: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  login: () => false,
  logout: () => {},
  isLoginModalOpen: false,
  openLoginModal: () => {},
  closeLoginModal: () => {},
});

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("xeltra_admin_auth");
    if (token === "true") {
      setIsAdmin(true);
    }
  }, []);

  const login = (username: string, pass: string) => {
    // Default admin credentials: username: admin , password: xeltra2026 (or admin123)
    if (
      (username.trim().toLowerCase() === "admin" || username.trim().toLowerCase() === "xeltra") &&
      (pass === "xeltra2026" || pass === "admin123" || pass === "xeltra")
    ) {
      localStorage.setItem("xeltra_admin_auth", "true");
      setIsAdmin(true);
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("xeltra_admin_auth");
    setIsAdmin(false);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        login,
        logout,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
