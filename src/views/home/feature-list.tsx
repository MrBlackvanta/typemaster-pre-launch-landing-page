import { features } from "@/data/features";

export default function FeatureList() {
  return (
    <section className="v-shell pt-27.75 md:pt-35.5 lg:pt-42">
      <ul className="grid gap-y-16 md:grid-cols-2 md:gap-x-17.25 md:gap-y-18 lg:grid-cols-4 lg:gap-x-7.5">
        {features.map(({ id, Icon, title, description }) => (
          <li key={id} className="text-center md:text-left">
            <div className="bg-brand mx-auto flex size-16.25 items-center justify-center rounded-2xl text-white md:mx-0">
              <Icon />
            </div>
            <h2 className="text-subtitle mx-auto mt-12 max-w-50 uppercase md:mx-0 md:mt-10 lg:mt-12">
              {title}
            </h2>
            <p className="mt-6">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
