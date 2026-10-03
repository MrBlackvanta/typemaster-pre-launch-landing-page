import Attribution from "./attribution";

export default function SiteFooter() {
  return (
    <footer className="v-shell relative pt-24 pb-12.5 md:pt-35.5 md:pb-10.75 lg:pt-32 lg:pb-9.75">
      <p className="text-center font-bold">
        Typemaster 2021{" "}
        <span aria-hidden="true" className="px-px">
          |
        </span>{" "}
        All Rights Reserved
      </p>
      <Attribution />
    </footer>
  );
}
