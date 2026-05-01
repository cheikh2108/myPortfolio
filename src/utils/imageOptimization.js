/**
 * Optimise les images Supabase avec srcset responsive
 */
export function getSupabaseImageUrl(baseUrl, size = '800w') {
  // Remplace la taille si elle existe
  return baseUrl.replace(/_(\d+w|1600w|3840w)/, `_${size}`);
}

export function getImageSrcSet(baseUrl) {
  if (!baseUrl.includes('supabase.co')) return null;
  
  return {
    srcSet: `
      ${getSupabaseImageUrl(baseUrl, '400w')} 400w,
      ${getSupabaseImageUrl(baseUrl, '800w')} 800w,
      ${getSupabaseImageUrl(baseUrl, '1200w')} 1200w
    `.trim(),
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw'
  };
}
