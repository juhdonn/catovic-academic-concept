"""Verify generated routes, local links/fragments, landmarks, and basic metadata."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import gzip
root = Path(__file__).resolve().parents[1] / 'dist'
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.links=[]; self.ids=[]; self.h1=0; self.main=0; self.lang=False; self.description=False; self.noindex=False
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if tag=='a': self.links.append(d.get('href',''))
  if 'id' in d:self.ids.append(d['id'])
  if tag=='h1':self.h1+=1
  if tag=='main':self.main+=1
  if tag=='html':self.lang=d.get('lang')=='en'
  if tag=='meta' and d.get('name')=='description':self.description=bool(d.get('content'))
  if tag=='meta' and d.get('name')=='robots':self.noindex='noindex' in d.get('content','')
pages={}
for path in root.rglob('*.html'):
 p=Page();p.feed(path.read_text());pages[path.resolve()]=p
failures=[]
for path,p in pages.items():
 for check,ok in [('one h1',p.h1==1),('main landmark',p.main==1),('English language',p.lang),('description',p.description),('demo noindex',p.noindex),('unique IDs',len(set(p.ids))==len(p.ids))]:
  if not ok:failures.append(f'{path.name}: {check}')
 for href in p.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  target=(root/unquote(u.path.lstrip('/')) if u.path.startswith('/') else path.parent/unquote(u.path)) if u.path else path
  if target.is_dir():target=target/'index.html'
  if not target.exists():failures.append(f'{path}: missing {href}');continue
  if u.fragment and target.resolve() in pages and u.fragment not in pages[target.resolve()].ids:failures.append(f'{path}: missing fragment {href}')
print(f'Checked {len(pages)} HTML pages and {sum(len(p.links) for p in pages.values())} links.')
print(f'Homepage gzip: {len(gzip.compress((root/"index.html").read_bytes())):,} bytes')
print(f'External JavaScript files: {sum(1 for p in root.rglob("*.js"))}; small page scripts are inlined by Astro.')
print('PASS: internal routes, fragments, landmarks, metadata, noindex, unique IDs.' if not failures else '\n'.join(failures))
raise SystemExit(bool(failures))
