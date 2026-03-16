"use client";

import React, { createContext, useContext, useReducer, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type DimensionUnit = "ft" | "in";

export interface QuoteItem {
  id: string;
  serviceName: string;
  width?: number;
  height?: number;
  unit?: DimensionUnit;
  area?: number;
  notes?: string;
}

interface QuoteState {
  items: QuoteItem[];
  isOpen: boolean;
}

type QuoteAction =
  | { type: "ADD_ITEM"; payload: QuoteItem }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "CLEAR_QUOTE" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" };

// ─── Reducer ──────────────────────────────────────────────────────────────────

function quoteReducer(state: QuoteState, action: QuoteAction): QuoteState {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        isOpen: true,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    case "CLEAR_QUOTE":
      return { ...state, items: [] };
    case "OPEN_CART":
      return { ...state, isOpen: true };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface CartContextValue {
  items: QuoteItem[];
  isOpen: boolean;
  totalCount: number;
  addItem: (item: QuoteItem) => void;
  removeItem: (id: string) => void;
  clearQuote: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(quoteReducer, { items: [], isOpen: false });

  const addItem = useCallback((item: QuoteItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  }, []);

  const clearQuote = useCallback(() => dispatch({ type: "CLEAR_QUOTE" }), []);
  const openCart = useCallback(() => dispatch({ type: "OPEN_CART" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE_CART" }), []);

  const totalCount = state.items.length;

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalCount,
        addItem,
        removeItem,
        clearQuote,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside a CartProvider");
  return ctx;
}
