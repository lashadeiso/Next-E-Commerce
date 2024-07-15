"use client";

import { products } from "@wix/stores";
import { useState } from "react";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionsSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value,
        ) &&
        variant.stock?.inStock &&
        variant.stock.quantity &&
        variant.stock.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option: any) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice: any) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });
              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionsSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  className="relative h-8 w-8 rounded-full ring-1 ring-gray-300"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full ring-2"></div>
                  )}
                  {disabled && (
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-red-400"></div>
                  )}
                </li>
              ) : (
                <li
                  className="rounded-md px-4 py-1 text-sm text-cPink ring-1 ring-cPink"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                        ? "#fbcfe8"
                        : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* <ul className="flex items-center gap-3">
            <li className="relative h-8 w-8 cursor-pointer rounded-full bg-black ring-1 ring-gray-300">
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full ring-2"></div>
            </li>
            <li className="relative h-8 w-8 cursor-pointer rounded-full bg-purple-500 ring-1 ring-gray-300"></li>
            <li className="relative h-8 w-8 cursor-not-allowed rounded-full bg-white ring-1 ring-gray-300">
              <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-red-400"></div>
            </li>
          </ul> */}

      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="cursor-pointer rounded-md px-4 py-1 text-sm text-cPink ring-1 ring-cPink">
          Small
        </li>
        <li className="cursor-pointer rounded-md bg-cPink px-4 py-1 text-sm text-white ring-1 ring-cPink">
          Medium
        </li>
        <li className="cursor-not-allowed rounded-md bg-pink-200 px-4 py-1 text-sm text-white ring-1 ring-pink-200">
          Large
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
