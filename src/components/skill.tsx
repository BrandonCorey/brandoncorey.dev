import { SkillType } from "@/types/skills";

export default function Skill({ skillName, Icon }: SkillType): JSX.Element {
  return (
    <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
      {Icon}
      <h4 className="mt-2 text-base font-semibold">{skillName}</h4>
    </div>
  );
}
