import PrimaryButton, { SecondaryButton } from "./assets/PrimaryButton";
import TechStacks from "./assets/TechStacks";
import { techStack } from "./assets/data";
import resumePDF from "./assets/Eugene_Amo_Agyemang-CV.pdf";
import pic from "./assets/port2.jpg";


function About() {
  const handleDownload = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <main>
      <div className="container p-10 flex flex-col space-y-9">
        <section className="flex flex-col-reverse md:flex-row md:space-x-4 space-y-4">
          <div className="flex flex-col space-y-4 justify-start w-full md:w-1/2">
            <h3 className="text-4xl font-bold">Eugene Amo Agyemang</h3>
            <h5 className="text-2xl">Software Engineer</h5>
            <p>
              Passionate software engineer with a knack for problem-solving and
              a love for coding. Dedicated to crafting efficient and impactful
              solutions, I thrive on turning ideas into functional software
              applications. Ever learning and adapting to new useful
              technologies, I strive to deliver high-quality code that gets the
              work done. Let's collaborate to create innovative software
              solutions that make a difference.
            </p>
            <div className="flex row space-x-4">
              <div className="hidden">

              <PrimaryButton
                text="View Portfolio"
                icon={"emojione-monotone:right-arrow"}
              />
              </div>
              <div
                onClick={() => {
                  handleDownload();
                }}
              >
                <SecondaryButton text="Resume" icon={"pepicons-pop:cv"} />
              </div>
            </div>
          </div>
          <div className="bg-primary w-full h-full md:w-1/2 " >
          <img
              src={pic}
              className="w-full h-full "
            
              alt="my picture"
            />
          </div>
        </section>
        <section className="flex-flex-col space-y-4">
          <div className="flex flex-row justify-start items-center space-x-4">
            <div className="w-1 h-10 bg-primary"></div>
            <h3 className="font-bold text-4xl">What I do</h3>
          </div>
          <p>
            I possess a diverse range of technical skill sets and have extensive
            experience utilizing various technologies to create innovative
            software applications. Here's an expanded overview of my expertise:
          </p>
        </section>
        <section className="flex flex-wrap gap-y-3 ">
          <TechStacks
            title="Flutter"
            details={techStack.flutter}
            icons={["logos:flutter", "vscode-icons:file-type-firebase"]}
          />
          <TechStacks
            title="React"
            details={techStack.react}
            icons={["logos:react"]}
          />
          <TechStacks
            title="Kotlin (Ktor) "
            details={techStack.ktor}
            icons={["vscode-icons:file-type-kotlin", "devicon:ktor"]}
          />
          <TechStacks
            title="Node"
            details={techStack.node}
            icons={["logos:nodejs"]}
          />
          <TechStacks
            title="Bootstrap & Tailwind"
            details={techStack.cssFramework}
            icons={["logos:bootstrap", "logos:tailwindcss-icon"]}
          />
          <TechStacks
            title="Javascript & Typscript"
            details={techStack.javascript}
            icons={[
              "logos:javascript",
              "vscode-icons:file-type-typescript-official",
            ]}
          />
          <TechStacks
            title="Databases"
            details={techStack.database}
            icons={["logos:mysql", "devicon:mongodb-wordmark"]}
          />
          <TechStacks
            title="HTML,CSS & SCSS"
            details={techStack.html}
            icons={[
              "vscode-icons:file-type-html",
              "vscode-icons:file-type-css",
              "vscode-icons:file-type-scss",
            ]}
          />
        </section>
      </div>
    </main>
  );
}

export default About;
