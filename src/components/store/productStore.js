import { create } from "zustand";

export const productStore = create(set => ({
	allProducts: [],
  }));