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
    NodeJS: <devIcons.NodejsOriginal size="50" />,
    TypeScript: <devIcons.TypescriptOriginal size="50" />,
    Go: <devIcons.GoOriginal size="50" />,
    Python: <devIcons.PythonOriginal size="50" />,
    SQL: <devIcons.PostgresqlPlain size="50" />,
    MongoDB: <devIcons.MongodbOriginal size="50" />,
    Express: <devIcons.ExpressOriginal size="50" />,
  },

  Frontend: {
    JavaScript: <devIcons.JavascriptOriginal size="50" />,
    React: <devIcons.ReactOriginal size="50" />,
    CSS: <devIcons.Css3Original size="50" />,
    HTML: <devIcons.Html5Original size="50" />,
    "Tailwind CSS": <devIcons.TailwindcssOriginal size="50" />,
  },

  Infrastructure: {
    Git: <devIcons.GitOriginal size="50" />,
    Docker: <devIcons.DockerPlain size="50" />,
    Terraform: <devIcons.TerraformOriginal size="50" />,
    Nginx: <devIcons.NginxOriginal size="50" />,
    "Amazon EC2": <AWSIcons.EC2 />,
    "Amazon S3": <AWSIcons.S3 />,
    "Amazon Lambda": <AWSIcons.Lambda />,
    "Amazon Kinesis": <AWSIcons.Kinesis />,
    "Amazon Redshift": <AWSIcons.Redshift />,
    "Amazon CloudWatch": <AWSIcons.CloudWatch />,
  },
};

export default function SkillsPreview(): JSX.Element {
  const categories = Object.keys(skillsData) as Array<keyof SkillsData>;
  return (
    <section
      className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800"
      id="skills"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
