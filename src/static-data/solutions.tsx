import { Feature } from "@/types/feature";
import { v4 as uuid } from "uuid";

import {
  ClipboardPenLineIcon,
  FilePlus2Icon,
  FileScanIcon,
  FileVideo2Icon,
  UserCogIcon,
  UsersIcon,
} from "lucide-react";

export const solutionsData: Feature[] = [
  {
    id: uuid(),
    title: "headHuntersTitle",
    description: "headHuntersDescription",
    icon: <FileScanIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "greyCollarTitle",
    description: "greyCollarDescription",
    icon: <FileVideo2Icon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "whiteCollarTitle",
    description: "whiteCollarDescription",
    icon: <FilePlus2Icon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "startupTitle",
    description: "startupDescription",
    icon: <UserCogIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "universityTitle",
    description: "universityDescription",
    icon: <UsersIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "officialDomTitle",
    description: "officialDomDescription",
    icon: <ClipboardPenLineIcon width={44} height={44} />,
  },
];
