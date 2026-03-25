Preferred: Cursor uploads with names that match src/content/gallery-manifest.json (prefix + uuid.png), then:

  npm run gallery:import

That maps each file to the correct 01–18 slot (no alphabetical guessing).

Fallback — generic filenames only: drop JPG/PNG here, prefix 01_, 02_, … then:

  npm run wedding:ingest

Do not commit files in this folder (gitignored). Commit ../ *.jpg after import.
