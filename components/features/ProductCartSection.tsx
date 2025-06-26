"use client";

import React, { useState } from "react";
import Image from "next/image";
import mainImage from "../../public/images/willDelete/13_1c04d432-a1ba-4e9b-88a1-b9c3aecbab9d_700x900.png";
import {
  FaLongArrowAltRight,
  FaMinus,
  FaPlus,
  FaRegTrashAlt,
} from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "NIS 90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "NIS 32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "NIS 32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 4,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "NIS 90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 5,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "NIS 32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 6,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "NIS 32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];
const ProductCartSection = () => {
  const [cartProducts, setCartProducts] = useState(products);

  const incrementQuantity = (id: number) => {
    setCartProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decrementQuantity = (id: number) => {
    setCartProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const parsePrice = (price: string) =>
    Number(price.replace(/(NIS|\$|,|\s)/g, ""));

  const totalPrice = cartProducts.reduce(
    (acc, product) => acc + parsePrice(product.price) * product.quantity,
    0
  );
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-[1400px] px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-[950px]">
            <div className="space-y-6 divide-y grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 divide-gray-300 px-6 bg-white">
              {cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center md:items-start justify-between pb-6 gap-10 bg-white"
                >
                  {/* الصورة */}
                  <Link
                    href={`/shop/product/${product.id}`}
                    className="border border-secondary/50"
                  >
                    <Image
                      src={mainImage}
                      alt="product image"
                      width={130}
                      height={100}
                      className="object-cover object-center rounded "
                      style={{ aspectRatio: "5/6" }}
                      priority
                    />
                  </Link>

                  <div className="flex flex-col justify-between h-full flex-1 min-w-0 ">
                    <div className="mt-3">
                      <Link
                        href={`/shop/product/${product.id}`}
                        className="text-lg text-zinc-500 hover:text-secondary transition-all duration-300"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-3 font-medium text-gray-900">
                        {product.price}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Color: {product.color}
                      </p>
                    </div>

                    <div className="border-2 mb-2 border-gray-300 w-fit flex justify-between items-center h-12">
                      <button
                        type="button"
                        className="flex justify-center items-center px-4 h-full hover:text-secondary"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        <FaMinus />
                      </button>
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => {
                          const val = Math.max(1, Number(e.target.value));
                          setCartProducts((prev) =>
                            prev.map((p) =>
                              p.id === product.id ? { ...p, quantity: val } : p
                            )
                          );
                        }}
                        min={1}
                        className="m-0 h-full w-[70px] px-2 text-center text-xl rounded-none appearance-none focus:outline-none focus:ring-0 focus:border-0
                        [&::-webkit-outer-spin-button]:appearance-none
                        [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        type="button"
                        className="flex justify-center items-center h-full px-4 hover:text-secondary"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 items-center justify-center md:items-end md:justify-between pt-3 h-full">
                    <button
                      type="button"
                      className="text-secondary hover:text-secondary-100"
                      title="Remove"
                    >
                      <FaRegTrashAlt className="w-5 h-5" />
                    </button>
                    <p className="md:mt-4 text-lg text-gray-700">
                      NIS{" "}
                      {(parsePrice(product.price) * product.quantity).toFixed(
                        2
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4  border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
              <p className="text-xl font-semibold text-gray-900 ">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  {/* كمثال بيانات ثابتة - يمكنك تعديلها لتصبح ديناميكية */}
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      ${totalPrice.toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$299.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      $99
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                  <dt className="text-base font-bold text-gray-900 ">Total</dt>
                  <dd className="text-base font-bold text-gray-900 ">
                    ${(totalPrice - 299 + 99 + 799).toFixed(2)}
                  </dd>
                </dl>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-secondary"
              >
                Place Order
              </button>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 "> or </span>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline "
                >
                  Continue Shopping
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>

            <div className="space-y-4  border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Do you have a voucher or gift card?
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center bg-secondary px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-primary-300 "
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCartSection;
