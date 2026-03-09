import Image from "next/image"

interface ImageSectionProps {
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

export function ImageSection({
  imageSrc,
  imageAlt,
  whoAmI,
  whatIsThis,
  imagePosition = 'left',
}: ImageSectionProps) {
  const imageContent = (
    <div className="rounded-xl overflow-hidden relative">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={1000}
      />
    </div>
  )

  const textContent = (
    <div className="max-w-3xl text-left mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-gray-100 mb-6">{whoAmI.title}</h2>
      <p className="text-lg text-gray-400 leading-relaxed mb-6">
        {whoAmI.desc}
      </p>
      <h2 className="text-4xl font-bold text-gray-100 mb-6">{whatIsThis.title}</h2>
      <p className="text-lg text-gray-400 leading-relaxed">
        {whatIsThis.desc}
      </p>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
      <div className="h-80 md:h-96">
        {imageContent}
      </div>
      <div className="h-80 md:h-96">
        {textContent}
      </div>
    </div>
  )
}
