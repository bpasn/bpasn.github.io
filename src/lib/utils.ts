import { type ClassValue, clsx } from "clsx"
import { Children } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const EachElement = <T>({ render, of }: {
  render: (element: T, index: number) => JSX.Element;
  of: T[]
}) => Children.toArray(of.map((element: T, index: number) => render(element, index)))