"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEdit,
  FaEye,
  FaEyeSlash,
  FaPlus,
  FaInfoCircle,
  FaTrash,
} from "react-icons/fa";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import { collectionsData } from "@/constants/collectionsData";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import { FiMoreVertical } from "react-icons/fi";
import Link from "next/link";

type Collection = (typeof collectionsData.collections)[number] & {
  visible: boolean;
};

const Collections = () => {
  const [collections, setCollections] = useState<Collection[]>(
    collectionsData.collections.map((col) => ({ ...col, visible: true }))
  );
  const [selected, setSelected] = useState<Collection | null>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuId, setMenuId] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const toggleVisibility = (id: string) => {
    setCollections((prev) =>
      prev.map((col) =>
        col.id === id ? { ...col, visible: !col.visible } : col
      )
    );
  };

  const deleteCollection = (id: string) => {
    setCollections((prev) => prev.filter((col) => col.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className=""
    >
      <div className="flex justify-between items-center mb-6">
        <DashboardHeader title="Collections" />
        <Link
          href="/admin/collections/add"
          className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-[#1a252f] transition-all duration-300"
        >
          <FaPlus /> Add Collection
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <motion.div
            key={collection.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl relative shadow-xl bg-white overflow-hidden flex flex-col h-full"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              width={400}
              height={160}
              className="w-full aspect-[4/3] p-2 rounded-t-2xl hover:scale-105 transition-all duration-300 object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold mb-1 text-[#34495e]">
                {collection.title}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                {collection.description}
              </p>

              <p className="text-green-600 font-bold text-sm mt-auto mb-0">
                ILS {collection.price.toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={(e) => handleMenuOpen(e, collection.id)}
                aria-label="options"
                className="absolute bottom-3 right-3 z-20 bg-secondary/90 rounded-md p-1 hover:bg-gray-700 transition-colors"
              >
                <FiMoreVertical className="text-white w-6 h-6" />
              </button>

              <Menu
                anchorEl={anchorEl}
                open={menuId === collection.id}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    setSelected(collection);
                    handleMenuClose();
                  }}
                >
                  <FaInfoCircle className="mr-2 text-secondary" /> View Details
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                  }}
                >
                  <Link href={`/admin/collections/edit/${collection.id}`} className="flex items-center">
                    <FaEdit className="mr-2 text-blue-500" /> Edit
                  </Link>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    toggleVisibility(collection.id);
                    handleMenuClose();
                  }}
                >
                  {collection.visible ? (
                    <>
                      <FaEyeSlash className="mr-2 text-gray-600" /> Hide
                    </>
                  ) : (
                    <>
                      <FaEye className="mr-2 text-green-600" /> Show
                    </>
                  )}
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    deleteCollection(collection.id);
                    handleMenuClose();
                  }}
                  className="text-red-600"
                >
                  <FaTrash className="mr-2 text-red-600" /> Delete
                </MenuItem>
              </Menu>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
      >
        {selected && (
          <>
            <DialogTitle
              fontSize={24}
              fontWeight={700}
              style={{ color: "#2c3e50" }}
            >
              {selected.title}
            </DialogTitle>
            <DialogContent>
              <Image
                src={selected.image}
                alt={selected.title}
                width={800}
                height={300}
                className="md:w-1/2 h-auto border-2 border-black-300 object-cover rounded-xl mb-4 mx-auto"
              />
              <p className="text-gray-700 mb-4">{selected.description}</p>
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              <div className="grid grid-cols-1 xmobile:grid-cols-2 md:grid-cols-4 gap-4">
                {selected.products.map((p) => (
                  <div
                    key={p.id}
                    className="border border-gray-300 rounded-lg p-2"
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={100}
                      height={100}
                      className="w-full aspect-[8/10] object-cover rounded"
                    />
                    <div className="mt-2">
                      <p className="font-medium text-sm">{p.title}</p>
                      <p className="text-xs text-gray-500">
                        ILS {p.price.toFixed(2)}
                      </p>
                      {p.colors.length > 0 && (
                        <div className="flex gap-1 mt-1">
                          {p.colors.map((color, i) => (
                            <span
                              key={i}
                              className="w-4 h-4 rounded-full border"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </motion.div>
  );
};

export default Collections;
