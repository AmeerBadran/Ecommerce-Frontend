"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import SidebarCart from "@/components/features/SidebarCart";

export default function NavbarAndCart() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <SidebarCart open={cartOpen} setOpen={setCartOpen} />
    </>
  );
}
