import type { ComponentType, SVGProps } from 'react';
import { YoutubeIcon, SpotifyIcon } from '@/components/social-icons';
import { AppleMusicIcon, AmazonMusicIcon, JioSaavnIcon } from '@/components/platform-icons';

// To add a new platform (e.g. "Tidal"): add an entry here, then reference its
// key in any song's `links` array in src/data/songs.ts.
export interface PlatformConfig {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  hoverClass: string;
}

export const PLATFORMS = {
  youtube: {
    label: 'YouTube',
    icon: YoutubeIcon,
    hoverClass: 'group-hover:border-[#FF0000] group-hover:text-[#FF0000] group-hover:bg-[#FF0000]/10',
  },
  spotify: {
    label: 'Spotify',
    icon: SpotifyIcon,
    hoverClass: 'group-hover:border-[#1DB954] group-hover:text-[#1DB954] group-hover:bg-[#1DB954]/10',
  },
  'apple-music': {
    label: 'Apple Music',
    icon: AppleMusicIcon,
    hoverClass: 'group-hover:border-[#FA243C] group-hover:text-[#FA243C] group-hover:bg-[#FA243C]/10',
  },
  'amazon-music': {
    label: 'Amazon Music',
    icon: AmazonMusicIcon,
    hoverClass: 'group-hover:border-[#00A8E1] group-hover:text-[#00A8E1] group-hover:bg-[#00A8E1]/10',
  },
  jiosaavn: {
    label: 'JioSaavn',
    icon: JioSaavnIcon,
    hoverClass: 'group-hover:border-[#2BC5B4] group-hover:text-[#2BC5B4] group-hover:bg-[#2BC5B4]/10',
  },
} as const satisfies Record<string, PlatformConfig>;

export type PlatformId = keyof typeof PLATFORMS;
