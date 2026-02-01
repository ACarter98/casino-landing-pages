#!/usr/bin/env python3
"""
Affiliate Link Updater
Updates all casino affiliate links in HTML files based on affiliate-links.yaml config
"""

import os
import re
import yaml
from pathlib import Path

def load_config():
    """Load affiliate links configuration"""
    with open('affiliate-links.yaml', 'r') as f:
        config = yaml.safe_load(f)
    return config

def update_links_in_file(filepath, config):
    """Update affiliate links in a single HTML file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Define link mappings (casino name -> config key)
    link_mappings = {
        'Joe Fortune': 'JOE_FORTUNE_URL',
        'PlayAmo': 'PLAYAMO_URL',
        'BitStarz': 'BITSTARZ_URL',
        'King Billy': 'KING_BILLY_URL',
        '7Bit': 'SEVEN_BIT_URL',
        'Jackpot City': 'JACKPOT_CITY_URL',
        'Spin Casino': 'SPIN_CASINO_URL',
        'Ruby Fortune': 'RUBY_FORTUNE_URL',
        'Paddy Power': 'PADDY_POWER_URL',
        'Betfair': 'BETFAIR_URL',
        '888 Casino': 'EIGHT_EIGHT_EIGHT_URL',
        'Parimatch': 'PARIMATCH_URL',
        '10Cric': 'TEN_CRIC_URL',
        'Pure Casino': 'PURE_CASINO_URL'
    }
    
    updates_made = 0
    
    # Update each casino link
    for casino_name, config_key in link_mappings.items():
        new_url = config.get(config_key, '#')
        if new_url and new_url != '#':
            # Pattern to find CTA buttons with this casino
            # Matches: <a href="#" class="cta-button">...Joe Fortune...</a>
            pattern = rf'(<a href=")(#)("[^>]*>[^<]*{re.escape(casino_name)}[^<]*</a>)'
            replacement = rf'\g<1>{new_url}\g<3>'
            
            new_content, count = re.subn(pattern, replacement, content, flags=re.IGNORECASE)
            if count > 0:
                content = new_content
                updates_made += count
                print(f"  ✓ Updated {count} link(s) for {casino_name}")
    
    # Write updated content if changes were made
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return updates_made
    
    return 0

def main():
    """Main function to update all affiliate links"""
    print("🔧 Affiliate Link Updater")
    print("=" * 50)
    
    # Load configuration
    try:
        config = load_config()
        print("✓ Configuration loaded successfully")
    except Exception as e:
        print(f"✗ Error loading configuration: {e}")
        return
    
    # Find all HTML files
    html_files = list(Path('.').rglob('*.html'))
    print(f"✓ Found {len(html_files)} HTML files")
    print()
    
    total_updates = 0
    
    # Update each file
    for filepath in html_files:
        if 'bonus-site' in str(filepath):  # Skip bonus-site subfolder
            continue
            
        print(f"Processing: {filepath}")
        updates = update_links_in_file(filepath, config)
        total_updates += updates
        
        if updates == 0:
            print("  - No updates needed")
        print()
    
    print("=" * 50)
    print(f"✓ Total links updated: {total_updates}")
    print()
    print("Next steps:")
    print("1. Review the changes: git diff")
    print("2. Commit: git add -A && git commit -m 'Update affiliate links'")
    print("3. Push: git push")
    print()
    print("⚠️  Remember to test all links before deploying!")

if __name__ == '__main__':
    main()