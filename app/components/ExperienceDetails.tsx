import Image from "next/image";
import TextComponent from "./TextComponent";

interface Role {
  imgs: string[];
  title: string;
}

export interface ExperienceDetailsProps {
  title: string;
  exps: Role[],
  order?: "left" | "right"
}

export default function ExperienceDetails({
  title,
  exps,
  order
}: ExperienceDetailsProps) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
      {
        order === "right" ? 
        (
          exps.map(xp => (
            <>
              <p className="text-2xl">{xp.title}</p>
              {
                xp.imgs.map(img => 
                  <Image
                    src={img}
                    alt="Company: Scale AI"
                    title="Scale AI"
                    width={50}
                    height={50}
                  />
                )
              }
            </>
          ))
        ) : (
          exps.map(xp => (
            <>
              {
                xp.imgs.map(img =>
                  <div className="content-end justify-self-end rounded-lg overflow-hidden">
                    <Image
                    src={img}
                    alt="Company: Scale AI"
                    title="Scale AI"
                    width={80}
                    height={80}
                    />
                  </div>
                )
              }
              <p className="text-2xl">{xp.title}</p>
            </>
          ))    
        )
    }
    </div>
  )
}
