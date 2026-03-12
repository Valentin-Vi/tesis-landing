import Image from "next/image"
import TextComponent from "./TextComponent";
interface ImageSectionDoubleContentProps {
  imageSrc: string;
  imageAlt: string;
  whoAmI: {
    title: string;
    desc: string;
  },
  whatIsThis: {
    title: string;
    desc: string;
  }
  imagePosition?: 'left' | 'right' | 'top';
}

export function ImageSectionDoubleContent({
  imageSrc,
  imageAlt,
  whoAmI,
  whatIsThis,
  imagePosition = 'left',
}: ImageSectionDoubleContentProps) {
  const imageContent = (
    <div className="rounded-xl overflow-hidden size-full reative lg:w-100 lg:h-100">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  )

  const textContent = (
    <div className="grid max-w-3xl text-left lg:pl-6 ssm:px-6 h-80 md:h-96 md:content-center">
      <TextComponent title={whoAmI.title} desc={whoAmI.desc} />
      <TextComponent title={whatIsThis.title} desc={whatIsThis.desc} />
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
      <div className="flex justify-center h-80 md:h-96">
        { imageContent }
      </div>
      { textContent }
    </div>
  )
}
