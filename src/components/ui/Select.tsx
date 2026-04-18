"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = "", label, error, id, options, ...props }, ref) => {
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
                <select
                    ref={ref}
                    id={id}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 appearance-none bg-zinc-800 text-white
            ${
                error
                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : "border-zinc-600 focus:ring-2 focus:ring-yellow-500/20"
            }
            focus:outline-none focus:border-yellow-500
            disabled:bg-zinc-900 disabled:cursor-not-allowed
            ${className}`}
                    {...props}
                >
                    <option value="" disabled className="text-zinc-400">Selecione uma opção</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-zinc-800 text-white">
                            {opt.label}
                        </option>
                    ))}
                </select>
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        );
    },
);

Select.displayName = "Select";

export default Select;
