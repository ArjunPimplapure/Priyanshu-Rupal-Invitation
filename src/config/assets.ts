/**
 * ============================================================================
 * ASSET CONFIGURATION & CUSTOMIZATION GUIDE
 * ============================================================================
 * 
 * 1. WEDDING LOGO / MONOGRAM:
 *    - Update `ASSETS.weddingLogo` below to point to your new file (e.g., '/assets/wedding_monogram.jpg').
 * 
 * 2. BACKGROUND WEDDING SONG:
 *    - Custom wedding audio file placed at `/public/audio/wedding_music.mp3`.
 *    - Paths are resolved with `import.meta.env.BASE_URL` so GitHub Pages and any subfolder hosting works perfectly!
 * 
 * 3. EVENT IMAGES & WAX SEAL:
 *    - Generated high-fidelity AI imagery for all 7 wedding rituals and events.
 * ============================================================================
 */

import monogramImg from '../assets/images/wedding_monogram_1790881675910.jpg';
import sealImg from '../assets/images/burgundy_wax_seal_1790881686872.jpg';
import bgImg from '../assets/images/royal_invitation_bg_1790881698547.jpg';
import heavyBgImg from '../assets/images/royal_heavy_wedding_bg_1790890440766.jpg';

// Event AI Generated Visuals (Updated & Trendy Sangeet Night)
import carnivalImg from '../assets/images/event_carnival_fest_1790890821071.jpg';
import mayraImg from '../assets/images/event_mayra_tradition_1790890835153.jpg';
import sangeetImg from '../assets/images/trendy_sangeet_night_1790890804226.jpg';
import baaratImg from '../assets/images/event_baarat_royal_1790890848115.jpg';
import phereImg from '../assets/images/event_phere_sacred_1790890860006.jpg';
import vidaiImg from '../assets/images/event_vidai_moment_1790890872702.jpg';
import receptionImg from '../assets/images/event_reception_gala_1790890888908.jpg';

const baseUrl = import.meta.env.BASE_URL || './';
const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const ASSETS = {
  // Primary Wedding Logo / Monogram (Intertwined P & R with floral motif)
  weddingLogo: monogramImg,

  // Wax Seal on the envelope cover
  waxSeal: sealImg,

  // Opulent heavy royal Indian wedding background
  invitationBackground: heavyBgImg,
  lightBackground: bgImg,

  // Event Imagery
  events: {
    carnival: carnivalImg,
    mayra: mayraImg,
    sangeet: sangeetImg,
    baarat: baaratImg,
    phere: phereImg,
    vidai: vidaiImg,
    reception: receptionImg,
  },

  // Background Wedding Music URL (Works on GitHub Pages, Vercel, Local, etc.)
  backgroundMusic: `${cleanBase}audio/aud.mp3`,
  backgroundMusicWav: `${cleanBase}audio/aud.wav`,
  
  // Track details shown in the floating player tooltip
  musicTitle: 'Priyanshu & Rupal Wedding Song',
  musicArtist: 'Romantic Wedding Soundtrack (Uploaded Audio)',
};
