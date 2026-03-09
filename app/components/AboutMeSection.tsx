import Image from "next/image"

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
    <div className="grid gap-18 max-w-3xl text-left mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-4xl font-bold text-[#c7e320] mb-3">{whoAmI.title}</h2>
        <p className="text-lg text-[#c7e320]/70 leading-relaxed">
          {whoAmI.desc}
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-[#c7e320] mb-3">{whatIsThis.title}</h2>
        <p className="text-lg text-[#c7e320]/70 leading-relaxed">
          {whatIsThis.desc}
        </p>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pb-20 gap-8 items-center">
      <div className="h-80 md:h-96">
        {imageContent}
      </div>
      <div className="h-80 md:h-96">
        {textContent}
      </div>
    </div>
  )
}

interface ImageSectionSingleContentProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  desc: string;
  imagePosition?: 'left' | 'right' | 'top';
}

export function ImageSectionSingleContent({
  imageSrc,
  imageAlt,
  title,
  desc,
  imagePosition = 'left',
}: ImageSectionSingleContentProps) {
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
    <div className="grid gap-18 max-w-3xl text-left mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-[#c7e320] mb-3">{title}</h2>
      <p className="text-lg text-[#c7e320]/70 leading-relaxed">
        {desc}
      </p>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pb-20 gap-8 items-center">
      <div className="h-80 md:h-96">
        {imageContent}
      </div>
    </div>
  )
}
