"use client";

import { Check, Globe } from "lucide-react";

import { LANGUAGES } from "@/data/languages";

import NavDropdown from "./NavDropdown";

type LanguageMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selected: string;
  onSelect: (code: string) => void;
  className?: string;
};

// TODO: selecting a language only updates the UI; wire it to locale routing
// once translations exist
export default function LanguageMenu({
  selected,
  onSelect,
  ...props
}: LanguageMenuProps) {
  return (
    <NavDropdown
      {...props}
      id="language-menu"
      label="Language"
      Icon={Globe}
      panelClassName="p-2 sm:w-60"
    >
      <ul>
        {LANGUAGES.map(({ code, nativeName, englishName }) => (
          <li key={code}>
            <button
              type="button"
              aria-pressed={selected === code}
              onClick={() => {
                onSelect(code);
                props.onOpenChange(false);
              }}
              className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-black/5 focus-visible:bg-black/5 focus-visible:outline-none"
            >
              <span>
                <span lang={code} className="block text-sm font-medium">
                  {nativeName}
                </span>
                {englishName !== nativeName && (
                  <span className="block text-xs text-black/50">
                    {englishName}
                  </span>
                )}
              </span>
              {selected === code && (
                <Check
                  className="size-4 text-brand"
                  strokeWidth={2.5}
                  aria-hidden
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </NavDropdown>
  );
}
