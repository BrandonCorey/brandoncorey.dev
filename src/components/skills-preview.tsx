import AWSIcons from "../../static/aws-icons";
import devIcons from "devicons-react";
import SkillCard from "./skill-card";
import { Skills } from "@/types/skills";

interface SkillsData {
  Backend: Skills;
  Frontend: Skills;
  Infrastructure: Skills;
}

const skillsData: SkillsData = {
  Backend: {
    NodeJS: devIcons.NodejsOriginal,
    TypeScript: devIcons.TypescriptOriginal,
    Go: devIcons.GoOriginal,
    Python: devIcons.PythonOriginal,
    SQL: devIcons.PostgresqlPlain,
    MongoDB: devIcons.MongodbOriginal,
    Express: devIcons.ExpressOriginal,
  },

  Frontend: {
    JavaScript: devIcons.JavascriptOriginal,
    React: devIcons.ReactOriginal,
    CSS: devIcons.Css3Original,
    HTML: devIcons.Html5Original,
    "Tailwind CSS": devIcons.TailwindcssOriginal,
  },

  Infrastructure: {
    Git: devIcons.GitOriginal,
    Docker: devIcons.DockerPlain,
    Terraform: devIcons.TerraformOriginal,
    Nginx: devIcons.NginxOriginal,
    "Amazon EC2": AWSIcons.EC2,
    "Amazon S3": AWSIcons.S3,
    "Amazon Lambda": AWSIcons.Lambda,
    "Amazon Kinesis": AWSIcons.Kinesis,
    "Amazon Redshift": AWSIcons.Redshift,
    "Amazon CloudWatch": AWSIcons.CloudWatch,
  },
};

export default function SkillsPreview(): JSX.Element {
  const categories = Object.keys(skillsData) as Array<keyof SkillsData>;
  return (
    <section
      className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-zinc-900"
      id="skills"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              My Skills
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the technologies that I&apos;m familiar with in.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const skillsForCategory = skillsData[category];
            return (
              <SkillCard
                category={category}
                skills={skillsForCategory}
                key={category}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
