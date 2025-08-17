import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/600x800.png"
              alt="Harshdeep"
              width={600}
              height={800}
              className="rounded-lg shadow-2xl"
              data-ai-hint="artist portrait"
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-headline text-6xl md:text-7xl tracking-wider uppercase">
              About Harshdeep
            </h1>
            <p className="font-body text-lg leading-relaxed">
              Harshdeep is a multidisciplinary artist with a passion for storytelling through sound and visuals. With a background in classical music and a love for modern electronic production, Harshdeep's work transcends genres, creating immersive experiences that resonate with audiences worldwide.
            </p>
            <p className="font-body text-lg leading-relaxed">
              From composing film scores to producing genre-bending albums, the journey has been one of constant exploration. This space is a curated collection of projects, a look behind the scenes, and a platform for connection.
            </p>
            <p className="font-body text-lg leading-relaxed">
              Inspired by the textures of nature and the complexities of human emotion, every piece is a story waiting to be heard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
