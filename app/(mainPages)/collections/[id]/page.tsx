"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import { collectionsData } from "@/constants/collectionsData";
import FullCollectionCard from '@/components/features/FullCollectionCard';

const CollectionById = () => {
    const { id } = useParams()
    const collection = collectionsData.collections.find((col) => col.id === id);
  return (
    <div className="grid grid-cols-1 max-w-[1400px] mx-auto px-5 my-20 gap-10">
      {collection ? (
        <FullCollectionCard collection={collection} />
      ) : (
        <div>Collection not found.</div>
      )}
    </div>
  );
}

export default CollectionById
