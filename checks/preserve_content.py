"""Run: python checks/preserve_content.py. UI redesign must not rewrite report sources."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASELINE = Path(__file__).with_name('content-sha256.json')
expected = json.loads(BASELINE.read_text(encoding='utf-8-sig'))
actual = {name: hashlib.sha256((ROOT / name).read_bytes()).hexdigest() for name in expected}
assert actual == expected, 'Report content or application behavior changed; inspect the diff.'
print(f'PASS: {len(expected)} application/content files unchanged')

