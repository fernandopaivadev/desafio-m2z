"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", label, error, id, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={id}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200
            ${
                error
                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : "border-zinc-300 focus:ring-2 focus:ring-yellow-500/20"
            }
            focus:outline-none focus:border-yellow-500
            placeholder:text-zinc-400
            disabled:bg-zinc-100 disabled:cursor-not-allowed
            ${className}`}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        );
    },
);

Input.displayName = "Input";

export default Input;