import type { ComponentType } from "react";
import {
  BatteryIcon,
  BluetoothIcon,
  CompatibleIcon,
  LightIcon,
} from "@/components/icons";

type Feature = {
  id: string;
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    id: "compatible",
    Icon: CompatibleIcon,
    title: "Highly compatible",
    description:
      "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
  },
  {
    id: "bluetooth",
    Icon: BluetoothIcon,
    title: "Wireless with bluetooth",
    description:
      "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
  },
  {
    id: "battery",
    Icon: BatteryIcon,
    title: "High capacity battery",
    description:
      "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
  },
  {
    id: "backlit",
    Icon: LightIcon,
    title: "RGB backlit modes",
    description:
      "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
  },
];
