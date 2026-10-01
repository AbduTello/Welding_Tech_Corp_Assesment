"use client";

import { Check, Globe } from "lucide-react";
import { useState } from "react";

import { DEFAULT_LANGUAGE, LANGUAGES } from "@/data/languages";

import NavDropdown from "./NavDropdown";

type LanguageMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

export default function LanguageMenu(props: LanguageMenuProps) {
  // UI only for now; this becomes locale routing once translations exist
  const [selected, setSelected] = useState(DEFAULT_LANGUAGE);

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
                setSelected(code);
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
