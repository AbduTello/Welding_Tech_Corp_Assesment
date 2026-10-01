import { ACCOUNT_LINKS, CAREERS_HREF } from "@/data/navigation";

import { TEXT_LINK } from "@/components/ui/styles";

// Two panels from the old homepage slider. The portal is drawn as a file
// folder and careers as a door that swings open on hover or keyboard focus.
export default function PortalCareersBand() {
  return (
    <section
      aria-label="My WTC account and careers"
      className="bg-white px-4 py-16 text-navy sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-6">
        {/* Both panels start below the folder tab's height, so their tops line up */}
        <article className="relative flex flex-col pt-9">
          <span className="absolute top-0 left-0 flex h-9 items-center rounded-t-lg bg-navy/5 px-5 text-sm font-medium">
            My WTC
          </span>
          <div className="flex-1 rounded-lg rounded-tl-none bg-navy/5 p-8">
            <h2 className="font-heading text-2xl font-medium sm:text-3xl">
              Access supporting files
            </h2>
            <p className="mt-3 leading-relaxed text-navy/70">
              Supporting files for WTC controls are available to account
              holders.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              <a href={ACCOUNT_LINKS.createAccount} className={TEXT_LINK}>
                Create a My WTC account
              </a>
              <a href={ACCOUNT_LINKS.signIn} className={TEXT_LINK}>
                Sign in
              </a>
            </div>
          </div>
        </article>

        <article className="group flex flex-col md:pt-9">
          <div className="flex flex-1 items-end justify-between gap-6 rounded-lg p-8 ring-1 ring-navy/15">
            <div>
              <h2 className="font-heading text-2xl font-medium sm:text-3xl">
                Many doors of opportunity
              </h2>
              <p className="mt-3 leading-relaxed text-navy/70">
                WTC offers competitive wages, job training, tuition assistance,
                and promotion from within.
              </p>
              <a href={CAREERS_HREF} className={`mt-6 ${TEXT_LINK}`}>
                View careers
              </a>
            </div>

            {/* Door in its frame, standing on the panel's bottom edge, with brand-red light behind; hinged on the left */}
            <div
              aria-hidden
              className="relative -mb-8 h-32 w-20 shrink-0 rounded-t-md border-4 border-b-0 border-navy/20 bg-brand bg-clip-padding perspective-[600px] max-sm:hidden"
            >
              <div className="absolute inset-0 origin-left bg-navy transition-transform duration-500 ease-out group-focus-within:-rotate-y-55 group-hover:-rotate-y-55 motion-reduce:transition-none">
                <span className="absolute top-1/2 right-2 size-1.5 rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
