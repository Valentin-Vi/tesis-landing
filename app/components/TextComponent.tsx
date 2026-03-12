
export interface TextComponentProps {
  title: string;
  desc: string;
  pos?: "left" | "right";
}

export default function TextComponent({
  title,
  desc,
  pos,
}: TextComponentProps) {

  return (
    <div className="flex flex-col justify-center">
      <h3 className={"text-2xl font-serif text-[#3c93ea] my-4 " + (pos ? `text-${pos}` : "")}>{title}</h3>
      <p className="text-lg text-[#e4eef5] leading-relaxed">{desc}</p>
    </div>
  )
}
