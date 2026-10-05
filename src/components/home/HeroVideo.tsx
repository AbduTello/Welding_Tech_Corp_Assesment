"use client";

import { ArrowDown, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { asset } from "@/lib/asset";

// Silent 720p loop for the background; full 1080p with audio only in the modal
const BACKGROUND_SRC = asset("/hero-bg.mp4");
const MODAL_SRC = asset("/hero-full.mp4");
const POSTER_SRC = asset("/hero-poster.jpg");

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function PlayBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex size-20 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-md ${className}`}
    >
      {/* Nudged right so the triangle looks optically centered */}
      <Play className="ml-0.5 size-8" fill="currentColor" aria-hidden />
    </span>
  );
}

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) backgroundRef.current?.pause();
  }, []);

  // Positions the custom play cursor directly (no re-render per mouse move)
  function moveCursor(e: React.PointerEvent) {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
    if (!section || !cursor) return;
    const rect = section.getBoundingClientRect();
    cursor.style.transform = `translate3d(${e.clientX - rect.left}px, ${e.clientY - rect.top}px, 0)`;
    // Hide the play badge over other controls (e.g. the scroll arrow)
    setHovering(!(e.target as Element).closest("[data-no-play-cursor]"));
  }

  function scrollPastHero() {
    const section = sectionRef.current;
    if (!section) return;
    // Stop short by the fixed navbar's height so it doesn't cover the next section
    const navHeight = document.querySelector("header")?.offsetHeight ?? 0;
    window.scrollTo({
      top: section.getBoundingClientRect().bottom + window.scrollY - navHeight,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  // play() rejects if the browser blocks or interrupts playback; that's not
  // an error worth surfacing, so those rejections are ignored below.
  function openModal() {
    backgroundRef.current?.pause();
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    modalVideoRef.current?.play().catch(() => {});
  }

  // Runs for every way the dialog closes: Esc, the ✕ button, or a backdrop click
  function handleModalClose() {
    const modalVideo = modalVideoRef.current;
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
    document.body.style.overflow = "";
    if (!prefersReducedMotion()) backgroundRef.current?.play().catch(() => {});
  }

  return (
    <>
      <section
        ref={sectionRef}
        // 16:9 box capped at the viewport height: the sides never crop (the
        // video has centered text), only top/bottom on ultra-wide screens
        className="relative aspect-video max-h-svh w-full overflow-hidden bg-black"
        onPointerEnter={moveCursor}
        onPointerMove={moveCursor}
        onPointerLeave={() => {
          setHovering(false);
          setPressed(false);
        }}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
      >
        <video
          ref={backgroundRef}
          src={BACKGROUND_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />

        <button
          type="button"
          onClick={openModal}
          aria-label="Play video with sound"
          className="absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-4 focus-visible:-outline-offset-8 focus-visible:outline-white pointer-fine:cursor-none"
        >
          {/* Touch devices have no hover, so show a static centered button */}
          <PlayBadge className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" />
        </button>

        {/* Play badge that follows the mouse on fine-pointer devices */}
        <div
          ref={cursorRef}
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 hidden will-change-transform pointer-fine:block"
        >
          <PlayBadge
            className={`-translate-x-1/2 -translate-y-1/2 transition-[opacity,scale] duration-200 ${
              hovering ? "opacity-100" : "opacity-0"
            } ${pressed ? "scale-90" : hovering ? "scale-100" : "scale-50"}`}
          />
        </div>

        <button
          type="button"
          onClick={scrollPastHero}
          aria-label="Scroll down"
          data-no-play-cursor
          className="absolute right-4 bottom-4 flex size-11 cursor-pointer items-center justify-center rounded-full text-white ring-1 ring-white/50 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:bottom-8 sm:size-12"
        >
          <ArrowDown className="size-5" aria-hidden />
        </button>
      </section>

      <dialog
        ref={dialogRef}
        onClose={handleModalClose}
        // A click directly on the <dialog> (not its children) is a backdrop click
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
        aria-label="Welding Technology Corp video"
        className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <video
            ref={modalVideoRef}
            src={MODAL_SRC}
            poster={POSTER_SRC}
            controls
            playsInline
            preload="none"
            className="block max-h-[85vh] w-auto max-w-[92vw] rounded-lg bg-black shadow-2xl"
          />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close video"
            className="absolute -top-12 right-0 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
      </dialog>
    </>
  );
}
