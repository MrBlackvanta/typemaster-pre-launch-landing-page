import glassDesktop from "@/assets/images/glass-and-keyboard-desktop.webp";
import glassMobile from "@/assets/images/glass-and-keyboard-mobile.webp";
import glassTablet from "@/assets/images/glass-and-keyboard-tablet.webp";
import phoneDesktop from "@/assets/images/phone-and-keyboard-desktop.webp";
import phoneMobile from "@/assets/images/phone-and-keyboard-mobile.webp";
import phoneTablet from "@/assets/images/phone-and-keyboard-tablet.webp";
import PatternSquare from "./pattern-square";

export default function Showcase() {
  return (
    <section
      aria-labelledby="showcase-title"
      className="relative overflow-x-clip pt-6 md:pt-10 lg:pt-7.5"
    >
      <PatternSquare className="bottom-0 -left-30 h-59" />
      <div className="v-shell relative">
        <div className="lg:grid lg:grid-cols-[730fr_255fr] lg:items-start lg:gap-x-31.25">
          <div className="-ml-11.5 grid grid-cols-[129fr_220fr] gap-x-6 md:ml-0 md:grid-cols-[214fr_445fr] md:gap-x-7.5 lg:grid-cols-[255fr_445fr]">
            <figure className="bg-brand rounded-frame relative isolate overflow-clip">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={phoneDesktop.src}
                  width={255}
                  height={480}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={phoneTablet.src}
                  width={214}
                  height={320}
                />
                <img
                  src={phoneMobile.src}
                  alt="The Typemaster keyboard on a white desk beside a phone lying face down."
                  width={129}
                  height={193}
                  loading="lazy"
                  className="block w-full opacity-80 mix-blend-multiply"
                />
              </picture>
            </figure>
            <figure className="rounded-frame relative overflow-clip">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={glassDesktop.src}
                  width={445}
                  height={480}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={glassTablet.src}
                  width={445}
                  height={320}
                />
                <img
                  src={glassMobile.src}
                  alt="The Typemaster keyboard on a white desk with a glass of water, a laptop and a mouse."
                  width={220}
                  height={193}
                  loading="lazy"
                  className="absolute inset-0 block size-full object-cover"
                />
              </picture>
            </figure>
          </div>
          <div className="mt-18.75 grid gap-y-6 text-center md:mt-18 md:grid-cols-[255fr_398fr] md:items-center md:gap-x-9 md:gap-y-0 md:text-left lg:mt-28 lg:grid-cols-1 lg:gap-y-6.75">
            <h2
              id="showcase-title"
              className="text-title mx-auto max-w-63.75 uppercase md:mx-0"
            >
              Mechanical wireless keyboard
            </h2>
            <p>
              The Typemaster keyboard boasts top-notch build and practical
              design. It offers a wide variety of switches and keycaps, along
              with reliable wireless connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
