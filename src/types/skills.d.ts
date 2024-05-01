import { FC, ReactNode, SVGProps } from "react";

type IconType = FC<SVGProps>;

interface Skills {
  [skill: string]: IconType;
}

interface Skill {
  skillName: string;
  Icon: IconType;
}

export { Skills, Skill };
