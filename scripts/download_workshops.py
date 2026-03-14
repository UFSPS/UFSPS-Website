"""
Download workshop images from the UF SPS Instagram account
and sort them into past/ and upcoming/ directories based on post date.

Usage:
    pip install instaloader Pillow
    python scripts/download_workshops.py
"""

import os
import shutil
import re
from datetime import datetime, timezone
from pathlib import Path

import instaloader

# --- Config ---
INSTAGRAM_USERNAME = "uf.sps"
ASSETS_DIR = Path(__file__).resolve().parent.parent / "src" / "assets"
PAST_DIR = ASSETS_DIR / "past"
UPCOMING_DIR = ASSETS_DIR / "upcoming"
TEMP_DIR = Path(__file__).resolve().parent / "_temp_download"

# Max number of posts to fetch (set to None for all posts)
MAX_POSTS = 20


def sanitize_filename(caption: str, index: int) -> str:
    """Generate a short, clean filename from the post caption or index."""
    if caption:
        # Take the first few words of the caption
        words = re.sub(r'[^\w\s]', '', caption).split()[:4]
        name = "_".join(words).lower()
        # Limit length
        name = name[:40]
    else:
        name = f"post_{index}"
    return name


def main():
    # Ensure directories exist
    PAST_DIR.mkdir(parents=True, exist_ok=True)
    UPCOMING_DIR.mkdir(parents=True, exist_ok=True)
    TEMP_DIR.mkdir(parents=True, exist_ok=True)

    now = datetime.utcnow()

    loader = instaloader.Instaloader(
        download_videos=False,
        download_video_thumbnails=False,
        download_geotags=False,
        download_comments=False,
        save_metadata=False,
        compress_json=False,
        post_metadata_txt_pattern="",
        dirname_pattern=str(TEMP_DIR),
        filename_pattern="{shortcode}",
    )

    print(f"Fetching posts from @{INSTAGRAM_USERNAME}...")
    profile = instaloader.Profile.from_username(loader.context, INSTAGRAM_USERNAME)

    count = 0
    for post in profile.get_posts():
        if MAX_POSTS and count >= MAX_POSTS:
            break

        # Only process image posts (skip videos, reels, etc.)
        if post.is_video:
            continue

        count += 1
        caption = post.caption or ""
        filename = sanitize_filename(caption, count)
        post_date = post.date_utc

        # Determine target directory
        if post_date < now:
            target_dir = PAST_DIR
            category = "past"
        else:
            target_dir = UPCOMING_DIR
            category = "upcoming"

        # Download the post to temp directory
        try:
            loader.download_post(post, target=TEMP_DIR)
        except Exception as e:
            print(f"  ⚠ Failed to download post {post.shortcode}: {e}")
            continue

        # Find the downloaded image and move/rename it
        downloaded = TEMP_DIR / f"{post.shortcode}.jpg"
        if downloaded.exists():
            target_path = target_dir / f"{filename}.jpg"

            # Avoid name collisions
            suffix = 1
            while target_path.exists():
                target_path = target_dir / f"{filename}_{suffix}.jpg"
                suffix += 1

            shutil.move(str(downloaded), str(target_path))
            print(f"  ✓ [{category}] {target_path.name}  ({post_date.strftime('%Y-%m-%d')})")
        else:
            # Check for .png
            downloaded_png = TEMP_DIR / f"{post.shortcode}.png"
            if downloaded_png.exists():
                target_path = target_dir / f"{filename}.png"
                suffix = 1
                while target_path.exists():
                    target_path = target_dir / f"{filename}_{suffix}.png"
                    suffix += 1
                shutil.move(str(downloaded_png), str(target_path))
                print(f"  ✓ [{category}] {target_path.name}  ({post_date.strftime('%Y-%m-%d')})")
            else:
                print(f"  ⚠ Could not find downloaded file for {post.shortcode}")

    # Clean up temp directory
    shutil.rmtree(TEMP_DIR, ignore_errors=True)

    print(f"\nDone! Downloaded {count} images.")
    print(f"  Past:     {PAST_DIR}")
    print(f"  Upcoming: {UPCOMING_DIR}")


if __name__ == "__main__":
    main()
