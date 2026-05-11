/** Pollinations.ai thumbnails for Research page category cards (swap for local assets anytime). */

function aiImg(prompt, width = 400, height = 220) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true`
}

export const RESEARCH_CATEGORY_THUMBS = {
  ev: {
    ai: aiImg(
      'electric vehicle EV charging station research laboratory soft daylight olive green beige editorial photorealistic minimal no text',
      400,
      220,
    ),
    fallback:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=82',
  },
  battery: {
    ai: aiImg(
      'lithium battery pack cells engineering lab testing olive green tones photorealistic clean minimal no text',
      400,
      220,
    ),
    fallback:
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=82',
  },
  pollution: {
    ai: aiImg(
      'air quality monitoring sensors urban environment science olive beige editorial photorealistic minimal no text',
      400,
      220,
    ),
    fallback:
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=82',
  },
  solar: {
    ai: aiImg(
      'rooftop solar panels sunny sky renewable energy olive green palette photorealistic wide minimal no text',
      400,
      220,
    ),
    fallback:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=82',
  },
}
