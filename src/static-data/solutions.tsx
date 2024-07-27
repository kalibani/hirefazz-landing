import { Feature } from "@/types/feature";
import { v4 as uuid } from "uuid";

import {
  ClipboardPenLineIcon,
  Lightbulb,
  UserRoundCheckIcon,
  MonitorCogIcon,
  UserCogIcon,
  Building,
  GraduationCap,
} from "lucide-react";

export const solutionsData: Feature[] = [
  {
    id: uuid(),
    title: "headHuntersTitle",
    description: "headHuntersDescription",
    icon: <UserRoundCheckIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "greyCollarTitle",
    description: "greyCollarDescription",
    icon: <UserCogIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "whiteCollarTitle",
    description: "whiteCollarDescription",
    icon: <MonitorCogIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "startupTitle",
    description: "startupDescription",
    icon: <Lightbulb width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "universityTitle",
    description: "universityDescription",
    icon: <GraduationCap width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "officialDomTitle",
    description: "officialDomDescription",
    icon: <Building width={44} height={44} />,
  },
];
