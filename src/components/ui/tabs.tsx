import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

import { cn } from "../../lib/utils";

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl border border-slate-200 bg-white/80 p-1 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function TabsTrigger({ className, active = false, ...props }: TabsTriggerProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
        active ? "bg-slate-900 text-white shadow-sm" : "text-slate-500 hover:text-slate-900",
        className
      )}
      {...props}
    />
  );
}
