"use client";

import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

import { DEFAULT_LANGUAGE, LANGUAGES } from "@/data/languages";
import { NAV_LINKS } from "@/data/navigation";

import AccountMenu, { AccountActions } from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";
import NavSearch from "./NavSearch";

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 0,
    () => false,
  );
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  // UI only for now; this becomes locale routing once translations exist
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  // Transparent only over the home page hero, until the user interacts or scrolls
  const solid =
    !isHome ||
    scrolled ||
    hovered ||
    focusWithin ||
    menuOpen ||
    searchOpen ||
    accountOpen ||
    languageOpen;

  // A dropdown and the menu panel would stack under the bar, so opening a
  // dropdown closes the menu. (Clicking the menu button already closes any
  // open dropdown, since it counts as a click outside it.)
  function dropdownHandler(setOpen: (open: boolean) => void) {
    return (open: boolean) => {
      setOpen(open);
      if (open) setMenuOpen(false);
    };
  }

  // While the mobile menu is open, close it on Esc or if the window widens to
  // the desktop layout (otherwise the bar would stay stuck in its solid style)
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const desktop = window.matchMedia("(min-width: 80rem)"); // Tailwind `xl`
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", close);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", close);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-300 ${
        solid ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
      }`}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      // Only keyboard focus keeps the bar solid; a mouse click shouldn't pin it
      onFocus={(e) => setFocusWithin(e.target.matches(":focus-visible"))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocusWithin(false);
      }}
    >
      {/* Keeps white text readable over bright video frames */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 h-32 bg-linear-to-b from-black/50 to-transparent transition-opacity duration-300 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />

      <nav
        aria-label="Main"
        className="mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <div className="flex items-center gap-10">
          <Link
            href="/"
            aria-label="Welding Technology Corp home"
            onClick={() => setMenuOpen(false)}
            className="relative block aspect-[400/103] h-8 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current lg:h-10"
          >
            {/* Both logos stay loaded and cross-fade, so there's no flash on swap */}
            <Image
              src="/wtc-logo-white-transparent.png"
              alt=""
              width={400}
              height={103}
              preload
              className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
                solid ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/wtc-logo-black.png"
              alt=""
              width={400}
              height={103}
              preload
              className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
                solid ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* Nav links go to pages on weldtechcorp.com, so they are plain <a>, not next/link */}
          <ul className="hidden gap-6 text-sm font-medium xl:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 whitespace-nowrap after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <NavSearch open={searchOpen} onOpenChange={setSearchOpen} />
          <AccountMenu
            open={accountOpen}
            onOpenChange={dropdownHandler(setAccountOpen)}
            // On phones these live in the menu panel instead
            className="max-sm:hidden"
          />
          <LanguageMenu
            open={languageOpen}
            onOpenChange={dropdownHandler(setLanguageOpen)}
            selected={language}
            onSelect={setLanguage}
            className="max-sm:hidden"
          />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 flex size-10 cursor-pointer items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-current xl:hidden"
          >
            {menuOpen ? (
              <X className="size-6" aria-hidden />
            ) : (
              <Menu className="size-6" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`grid bg-white transition-[grid-template-rows,opacity] duration-300 xl:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {/* Scrolls if the menu is taller than a short phone screen */}
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-t border-black/10">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-4 text-base font-medium hover:bg-black/5 focus-visible:bg-black/5 focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* On phones, account and language move here from the bar */}
          <div className="space-y-5 border-t border-black/10 px-4 py-5 sm:hidden">
            <AccountActions />
            <div>
              <label
                htmlFor="mobile-language"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <Globe className="size-4" strokeWidth={1.75} aria-hidden />
                Language
              </label>
              <select
                id="mobile-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-2 w-full cursor-pointer rounded-lg bg-white px-3 py-2.5 text-sm ring-1 ring-black/20 focus-visible:outline-2 focus-visible:outline-black"
              >
                {LANGUAGES.map(({ code, nativeName }) => (
                  <option key={code} value={code} lang={code}>
                    {nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
