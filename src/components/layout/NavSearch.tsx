"use client";

import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

type NavSearchProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// Search icon that expands into an input. Submitting does nothing yet.
export default function NavSearch({ open, onOpenChange }: NavSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // The input is disabled while collapsed, so focus it once it's enabled
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function handleIconClick() {
    if (open) inputRef.current?.focus();
    else onOpenChange(true);
  }

  function close() {
    if (inputRef.current) inputRef.current.value = "";
    onOpenChange(false);
  }

  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      // Collapse when focus leaves the bar, unless the user has typed something
      onBlur={(e) => {
        const focusLeft = !e.currentTarget.contains(e.relatedTarget);
        if (focusLeft && !inputRef.current?.value) close();
      }}
      className={`flex h-10 items-center rounded-full transition-[width,background-color] duration-300 ${
        open ? "w-44 bg-current/10 sm:w-64" : "w-10"
      }`}
    >
      <button
        type="button"
        onClick={handleIconClick}
        aria-label="Search"
        aria-expanded={open}
        className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-current"
      >
        <Search className="size-5" strokeWidth={1.75} aria-hidden />
      </button>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search"
        aria-label="Search the site"
        disabled={!open}
        onKeyDown={(e) => {
          if (e.key === "Escape") close();
        }}
        className={`min-w-0 flex-1 bg-transparent pr-4 text-sm transition-opacity duration-300 outline-none placeholder:text-current/60 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
    </form>
  );
}
