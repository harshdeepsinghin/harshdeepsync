import type { ComponentType, SVGProps } from 'react';
import { YoutubeIcon, SpotifyIcon } from '@/components/social-icons';
import { AppleMusicIcon, AmazonMusicIcon, JioSaavnIcon } from '@/components/platform-icons';

// To add a new platform (e.g. "Tidal"): add an entry here, then reference its
// key in any song's `links` array in src/data/songs.ts.
export interface PlatformConfig {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** For the element being hovered directly (song page link, catalog arrow row). */
  hoverClass: string;
  /** For a standalone icon-only element hovered directly (catalog icon strip). */
  hoverTextClass: string;
}

export const PLATFORMS = {
  youtube: {
    label: 'YouTube',
    icon: YoutubeIcon,
    hoverClass: 'hover:border-[#FF0000] hover:text-[#FF0000] hover:bg-[#FF0000]/10',
    hoverTextClass: 'hover:text-[#FF0000]',
  },
  spotify: {
    label: 'Spotify',
    icon: SpotifyIcon,
    hoverClass: 'hover:border-[#1DB954] hover:text-[#1DB954] hover:bg-[#1DB954]/10',
    hoverTextClass: 'hover:text-[#1DB954]',
  },
  'apple-music': {
    label: 'Apple Music',
    icon: AppleMusicIcon,
    hoverClass: 'hover:border-[#FA243C] hover:text-[#FA243C] hover:bg-[#FA243C]/10',
    hoverTextClass: 'hover:text-[#FA243C]',
  },
  'amazon-music': {
    label: 'Amazon Music',
    icon: AmazonMusicIcon,
    hoverClass: 'hover:border-[#00A8E1] hover:text-[#00A8E1] hover:bg-[#00A8E1]/10',
    hoverTextClass: 'hover:text-[#00A8E1]',
  },
  jiosaavn: {
    label: 'JioSaavn',
    icon: JioSaavnIcon,
    hoverClass: 'hover:border-[#2BC5B4] hover:text-[#2BC5B4] hover:bg-[#2BC5B4]/10',
    hoverTextClass: 'hover:text-[#2BC5B4]',
  },
} as const satisfies Record<string, PlatformConfig>;

export type PlatformId = keyof typeof PLATFORMS;
