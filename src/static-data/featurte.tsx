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

export const featuresData: Feature[] = [
  {
    id: uuid(),
    title: "CVScreeningTitle",
    description: "CVScreeningDescription",
    icon: <FileScanIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "automaticInterviewTitle",
    description: "automaticInterviewDescription",
    icon: <FileVideo2Icon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "jobCreationTitle",
    description: "jobCreationDescription",
    icon: <FilePlus2Icon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "trackingCandidatesTitle",
    description: "trackingCandidatesDescription",
    icon: <UserCogIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "collaborativeHiringTitle",
    description: "collaborativeHiringDescription",
    icon: <UsersIcon width={44} height={44} />,
  },
  {
    id: uuid(),
    title: "assessmentPlatformTitle",
    description: "assessmentPlatformDescription",
    icon: <ClipboardPenLineIcon width={44} height={44} />,
  },
];
