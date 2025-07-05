"use client";
import FilterDropdown from "@/components/features/FilterDropdown";
import Pagination from "@/components/features/Pagination";
import ProductGrid from "@/components/features/ProductGrid";
import SidebarFilters from "@/components/features/SidebarFilters";
import SortDropdown from "@/components/ui/SortDropdown";
import React, { useEffect, useState } from "react";

const ShopBody = () => {
  const [price, setPrice] = useState<number[]>([0, 260]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [limit, setLimit] = useState<number>(12);
  const [page, setPage] = useState<number>(4);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [total, setTotal] = useState<number>(39);
  const [sortValue, setSortValue] = useState("az");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <div className="max-w-[1400px] grid lg:grid-cols-4 gap-5 mx-auto my-20 px-5">
      {/* Sidebar (Large screens only) */}
      <div className="hidden lg:block">
        <SidebarFilters price={price} onPriceChange={setPrice} />
      </div>

      {/* Products Section */}
      <div className="lg:col-span-3 w-full">
        <div className="flex relative flex-col md:flex-row items-center gap-2 justify-between mb-6 md:px-5 px-2">
          <p>
            Showing {page * limit - limit + 1}-
            {page * limit > total ? total : page * limit} of {total} Result
          </p>
          <SortDropdown value={sortValue} onChange={setSortValue} />
          <div className="flex items-center gap-4 lg:hidden min-h-10 min-w-20">
            <FilterDropdown price={price} onPriceChange={setPrice} />
          </div>
        </div>
        <ProductGrid />
        <div className="flex mt-10 relative flex-col md:flex-row items-center gap-2 justify-between mb-6">
          <Pagination
            currentPage={page}
            total={total}
            limit={limit}
            onPageChange={(newPage) => setPage(newPage)}
          />
          <p>
            Showing {page * limit - limit + 1}-
            {page * limit > total ? total : page * limit} of {total} Result
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopBody;
