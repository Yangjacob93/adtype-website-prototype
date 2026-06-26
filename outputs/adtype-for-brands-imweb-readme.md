# Adtype for Brands - Imweb Embed Notes

## Files
- `adtype-for-brands.html`: local/full preview file.
- `adtype-for-brands-imweb-snippet.html`: paste this into an Imweb HTML widget.
- `assets/`: upload these files to Imweb storage or a CDN.

## Asset Path
At the top of `adtype-for-brands-imweb-snippet.html`, replace:

```html
window.ADTYPE_ASSET_BASE = window.ADTYPE_ASSET_BASE || "./assets";
```

with the uploaded asset folder URL:

```html
window.ADTYPE_ASSET_BASE = "https://your-cdn.example.com/adtype-assets";
```

The page automatically applies this base URL to logos, videos, images, and the company profile PDF.

## Required Assets
- `adtype-logo-orange-crop.png`
- `adtype-logo-white-crop.png`
- `adtype-hero2.mp4`
- `hongdae-sync-creative.mp4`
- `mental-market-clip.mp4`
- `survey-review-radar.mp4`
- `adtype-map-simulator.mp4`
- `media-planning-system.mp4`
- `ad-effect-clip.mp4`
- `creative-bus-wrap.jpg`
- `creative-dooh-columns.jpg`
- `creative-transit-wide.jpg`
- `adtype-company-profile.pdf`

