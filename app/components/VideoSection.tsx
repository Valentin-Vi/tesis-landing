interface VideoSectionProps {
  videoSrc: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
}

export function VideoSection({
  videoSrc,
  title,
  description,
  imagePosition = 'left',
}: VideoSectionProps) {
  const videoContent = (
    <div className="w-full h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );

  const textContent = (
    <div className="flex flex-col justify-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
      {imagePosition === 'left' ? (
        <>
          <div className="h-80 md:h-96">{videoContent}</div>
          <div>{textContent}</div>
        </>
      ) : (
        <>
          <div>{textContent}</div>
          <div className="h-80 md:h-96">{videoContent}</div>
        </>
      )}
    </div>
  );
}
