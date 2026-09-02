import urllib.request
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

assets_dir = os.path.join(os.path.dirname(__file__), 'assets')
os.makedirs(assets_dir, exist_ok=True)

images = {
    # Hero: Dramatic brutalist concrete architecture with light shafts & warm reflections
    'hero-bg.jpg': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    # Statement circular disc / oculus: Minimalist concrete spiral / circular skylight
    'statement-disk.png': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=85',
    # 5 Case Studies
    'album1.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',  # Brutalist Villa Vacuum
    'album2.jpg': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85',  # Timber Pavilion
    'album3.jpg': 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=85',  # Monolith Vault
    'album4.jpg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',  # Basalt Stone Studio
    'album5.jpg': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=85',  # Aperture Residence
}

headers = {'User-Agent': 'Mozilla/5.0'}

for filename, url in images.items():
    filepath = os.path.join(assets_dir, filename)
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
        print(f" Saved {filename} ({os.path.getsize(filepath)} bytes)")
    except Exception as e:
        print(f" Error downloading {filename}: {e}")

print("All architectural photographs downloaded successfully!")
