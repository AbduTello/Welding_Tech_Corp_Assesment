"use client";

import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

type NavDropdownProps = {
  id: string;
  label: string;
  Icon: LucideIcon;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  panelClassName?: string;
  children: React.ReactNode;
};

// Navbar icon button that toggles a panel hanging flush under the header
export default function NavDropdown({
  id,
  label,
  Icon,
  open,
  onOpenChange,
  className = "",
  panelClassName = "",
  children,
}: NavDropdownProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // While open, close on a click outside or on Esc (returning focus to the icon).
  // Clicking another dropdown's icon counts as outside, so only one stays open.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) onOpenChange(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      onOpenChange(false);
      triggerRef.current?.focus();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    // The wrapper is deliberately not `relative`: the panel positions against
    // the header instead, so it sits flush under the bar rather than the icon
    <div ref={wrapperRef} className={className}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => onOpenChange(!open)}
        aria-label={label}
        aria-expanded={open}
        aria-controls={id}
        className="flex size-10 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-current"
      >
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </button>

      {/* Stays mounted so it can fade; `invisible` keeps its contents out of the tab order */}
      <div
        id={id}
        className={`absolute inset-x-0 top-full rounded-b-xl bg-white text-black shadow-lg transition-[opacity,translate,visibility] duration-200 sm:right-4 sm:left-auto lg:right-8 ${panelClassName} ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
