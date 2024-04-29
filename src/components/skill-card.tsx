import { SkillsType, SkillType } from "../types/skills";

interface CardProps {
  skills: SkillsType;
  category: "Backend" | "Frontend" | "Infrastructure";
}

export default function SkillCard({
  skills,
  category,
}: CardProps): JSX.Element {
  const skillsArr = Object.keys(skills);
  return (
    <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{category}</h3>
        <div className="grid grid-cols-2 gap-4">
          {skillsArr.map((skill) => (
            <SkillType skillName={skill} Icon={skills[skill]} key={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
