
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
      <h3 className={"text-2xl font-bold text-[#c7e320] my-4 " + (pos ? `text-${pos}` : "")}>{title}</h3>
      <p className="text-lg text-gray-100 leading-relaxed">{desc}</p>
    </div>
  )
}
