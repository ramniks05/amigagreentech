/** Pollinations.ai imagery for the Hybrid Battery invention disclosure page. */

function aiImg(prompt, width = 960, height = 540) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true`
}

export const INVENTION_VISUALS = {
  hero: {
    ai: aiImg(
      'futuristic electric vehicle with modular swappable battery pack and fixed battery, glowing energy lines, modern automotive engineering, soft olive green and warm beige palette, photorealistic editorial render, cinematic light, no text',
      1600,
      900,
    ),
    fallback:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=82',
  },
  field: {
    ai: aiImg(
      'sleek electric vehicle on charging pad with translucent overlay of battery cells and energy flow, blueprint style accent, olive green warm beige lighting, photorealistic, no text',
      900,
      560,
    ),
    fallback:
      'https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&q=82',
  },
  issues: {
    ai: aiImg(
      'congested city street with petrol diesel vehicles in smoggy haze contrasted with a clean EV in the foreground, environmental documentary photography, muted olive and warm tones, no text',
      900,
      540,
    ),
    fallback:
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=82',
  },
  hybridBattery: {
    ai: aiImg(
      'cutaway technical illustration of an EV with primary swappable battery pack and secondary fixed battery, liquid cooling lines visible, exploded view, olive green and beige industrial design, photorealistic CAD render, no text',
      900,
      540,
    ),
    fallback:
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&q=82',
  },
  swapStation: {
    ai: aiImg(
      'clean modern battery swapping station for electric vehicles with robotic arm exchanging modular battery packs, holographic UI showing available batteries, olive green warm beige interior, photorealistic editorial render, no text',
      900,
      540,
    ),
    fallback:
      'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=1200&q=82',
  },
  cloudPlatform: {
    ai: aiImg(
      'cloud dashboard for EV battery management showing battery health analytics, swap station map and warranty timeline, soft olive green beige interface, isometric render, photorealistic, no text',
      900,
      540,
    ),
    fallback:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=82',
  },
  conclusion: {
    ai: aiImg(
      'happy family driving an electric car on an open scenic highway with renewable energy farms in the distance, hopeful warm golden hour, olive green and warm beige tones, photorealistic, no text',
      900,
      540,
    ),
    fallback:
      'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1200&q=82',
  },
}
