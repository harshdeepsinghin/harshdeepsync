import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about',
  description: 'tatv is an independent musician and songwriter from Dehradun, Uttarakhand (UK07), who sings and raps in Hindi and Urdu.',
  alternates: { canonical: 'https://music.harshdeepsingh.in/about' },
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">

  <div className="space-y-5 text-left">
      <h1 className="font-headline text-3xl md:text-5xl tracking-tight leading-snug lowercase">
        i’m tatv
      </h1>
      <blockquote className="border-l-4 border-muted-foreground pl-4  text-muted-foreground opacity-80 mt-2">
        <span className="font-body text-xl md:text-2xl leading-snug lowercase">
          तत्व — <span className="font-bold">essence</span>
        </span>
      </blockquote>
      <p className="font-body text-lg md:text-2xl leading-snug md:leading-normal lowercase">
        a musician and songwriter who sings and raps.
      </p>
      <p className="font-body text-lg md:text-2xl leading-snug md:leading-normal lowercase">
        in hindi and urdu. poetry, storytelling, and nostalgia.
      </p>
          </div>

  <div className="space-y-5 text-right ml-auto">
      <h2 className="font-headline text-3xl md:text-5xl tracking-tight leading-snug md:leading-snug lowercase">
        rooted in the hills
      </h2>
      <p className="font-body text-base md:text-xl leading-snug md:leading-normal lowercase">
        from dehradun, uttarakhand (uk07).
      </p>
      <p className="font-body text-base md:text-xl leading-snug md:leading-normal lowercase">
        independent, and staying that way.
      </p>
          </div>

  <div className="space-y-5 text-left">
      <h2 className="font-headline text-3xl md:text-5xl tracking-tight leading-snug md:leading-snug lowercase">
        artistic voice
      </h2>
      <p className="font-body text-base md:text-xl leading-snug md:leading-normal lowercase">
        i don’t just perform, i translate emotions.
      </p>
      <p className="font-body text-base md:text-xl leading-snug md:leading-normal lowercase">
        raw emotion in every line — sometimes inspired by stories i feel or witness.
      </p>
          </div>

      <div className="text-center pt-8 space-y-2">
      <p className="font-headline text-2xl md:text-4xl tracking-tight leading-tight lowercase">
        tatv | तत्व
      </p>
      <p className="font-body text-base md:text-lg text-muted-foreground leading-snug lowercase">
        {'formerly harsh&deep'}
      </p>
      <p className="font-body text-sm md:text-base text-muted-foreground/80 leading-snug">
        by Harshdeep Singh · हर्षदीप
      </p>
          </div>

        </div>
      </div>
    </div>
  );
}
