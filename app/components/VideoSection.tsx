import TextComponent from "./TextComponent";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
      {imagePosition === 'left' ? (
        <>
          <div className="h-80 md:h-96">{videoContent}</div>
          <TextComponent title={title} desc={description} />
        </>
      ) : (
        <>
          <TextComponent title={title} desc={description} />
          <div className="h-80 md:h-96">{videoContent}</div>
        </>
      )}
    </div>
  );
}
