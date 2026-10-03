import keyboardDesktop from "@/assets/images/keyboard-desktop.webp";
import keyboardMobile from "@/assets/images/keyboard-mobile.webp";
import keyboardTablet from "@/assets/images/keyboard-tablet.webp";
import { PreOrderButton } from "@/components/ui";
import PatternSquare from "./pattern-square";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-x-clip pt-16 lg:pt-20.75"
    >
      <PatternSquare className="top-20.75 -right-30 h-60" />
      <div className="v-shell relative">
        <div className="md:-mr-49.25 md:grid md:grid-cols-[339fr_478fr] md:gap-x-17.25 lg:mr-0 lg:grid-cols-[445fr_540fr] lg:gap-x-31.25">
          <div className="md:pt-15">
            <h1
              id="hero-title"
              className="text-display lg:text-display-lg uppercase"
            >
              Typemaster keyboard
            </h1>
            <p className="lg:text-lead mt-8 lg:mt-6">
              Improve your productivity and gaming without breaking the bank.
              Upgrade to a high quality mechanical typing experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-10 md:gap-x-9 lg:gap-x-10">
              <PreOrderButton tone="brand" />
              <p className="font-bold whitespace-nowrap uppercase">
                Release on 5/27
              </p>
            </div>
          </div>
          <figure className="mt-16 -mr-11.25 md:mt-0 md:mr-0">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={keyboardDesktop.src}
                width={540}
                height={480}
              />
              <source
                media="(min-width: 768px)"
                srcSet={keyboardTablet.src}
                width={478}
                height={425}
              />
              <img
                src={keyboardMobile.src}
                alt="The Typemaster keyboard at an angle on a white desk, grey keycaps on a black body with one orange key."
                width={372}
                height={331}
                fetchPriority="high"
                className="rounded-frame w-full"
              />
            </picture>
          </figure>
        </div>
      </div>
    </section>
  );
}
