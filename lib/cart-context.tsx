"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { RfqCartItem } from "@/lib/types";

interface RfqCartContextType {
  items: RfqCartItem[];
  itemCount: number;
  isOpen: boolean;
  notification: string | null;
  addItem: (item: Omit<RfqCartItem, "id"> & { id?: string }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  dismissNotification: () => void;
}

const RfqCartContext = createContext<RfqCartContextType | undefined>(undefined);

const STORAGE_KEY = "emek_conta_rfq_cart_v1";

export function RfqCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<RfqCartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load RFQ cart from localStorage:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever items change (after initial load)
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save RFQ cart to localStorage:", e);
    }
  }, [items, isLoaded]);

  // Auto-dismiss notification after 4 seconds
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      setNotification(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [notification]);

  const addItem = (newItem: Omit<RfqCartItem, "id"> & { id?: string }) => {
    const itemId = newItem.id || `${newItem.slug}-${newItem.dimensions || "std"}`;
    setItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === itemId);
      if (existingIdx > -1) {
        const updated = [...prev];
        const currentQty = parseInt(updated[existingIdx].quantity) || 1;
        const addQty = parseInt(newItem.quantity) || 1;
        updated[existingIdx].quantity = `${currentQty + addQty} Adet`;
        return updated;
      }
      return [...prev, { ...newItem, id: itemId }];
    });

    setNotification(`"${newItem.name}" teklif listenize eklendi.`);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const dismissNotification = () => setNotification(null);

  const itemCount = items.length;

  return (
    <RfqCartContext.Provider
      value={{
        items,
        itemCount,
        isOpen,
        notification,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        dismissNotification,
      }}
    >
      {children}
    </RfqCartContext.Provider>
  );
}

export function useRfqCart() {
  const context = useContext(RfqCartContext);
  if (!context) {
    throw new Error("useRfqCart must be used within an RfqCartProvider");
  }
  return context;
}
