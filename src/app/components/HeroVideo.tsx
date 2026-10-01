"use client";

import { useEffect, useRef, useState } from "react";

// Silent 720p loop for the background; full 1080p with audio only in the modal
const BACKGROUND_SRC = "/hero-bg.mp4";
const MODAL_SRC = "/hero-full.mp4";
const POSTER_SRC = "/hero-poster.jpg";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.1-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      backgroundRef.current?.pause();
    }
  }, []);

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
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: section.getBoundingClientRect().bottom + window.scrollY,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function openModal() {
    backgroundRef.current?.pause();
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    modalVideoRef.current?.play().catch(() => {});
  }

  function handleClose() {
    const modalVideo = modalVideoRef.current;
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
    document.body.style.overflow = "";
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      backgroundRef.current?.play().catch(() => {});
    }
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
          className="absolute inset-0 h-full w-full cursor-pointer pointer-fine:cursor-none focus-visible:outline-4 focus-visible:-outline-offset-8 focus-visible:outline-white"
        >
          {/* Touch devices have no hover, so show a static centered button */}
          <span className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-md pointer-fine:hidden">
            <PlayIcon className="ml-1 size-8" />
          </span>
        </button>

        {/* Play badge that follows the mouse on fine-pointer devices */}
        <div
          ref={cursorRef}
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 hidden will-change-transform pointer-fine:block"
        >
          <div
            className={`flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-md transition-[opacity,scale] duration-200 ${
              hovering ? "opacity-100" : "opacity-0"
            } ${pressed ? "scale-90" : hovering ? "scale-100" : "scale-50"}`}
          >
            <PlayIcon className="ml-1 size-8" />
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPastHero}
          aria-label="Scroll down"
          data-no-play-cursor
          className="absolute right-4 bottom-4 flex size-11 cursor-pointer items-center justify-center rounded-full text-white ring-1 ring-white/50 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:bottom-8 sm:size-12"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="size-5"
          >
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </button>
      </section>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
        aria-label="Welding Tech Corp video"
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
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
              className="size-5"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
}
