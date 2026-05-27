import sys
import io

with open('public/pitch.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to find the start of the card for "02 · Dados proprietários"
search_str = '02 · Dados proprietários'
idx = content.find(search_str)

if idx != -1:
    # go back to the previous <div class="card"
    card_idx = content.rfind('<div class="card"', 0, idx)
    if card_idx != -1:
        # truncate content up to card_idx
        content = content[:card_idx]
        
        # now append the rest from a file
        with open('public/pitch_part3.html', 'r', encoding='utf-8') as f2:
            part3 = f2.read()
            
        # The user's snippet starts with <svg ...
        # But we deleted the <div class="card"... wrapper around it.
        # Let's restore the wrapper for the 02 card
        wrapper = """      <div class="card" style="padding: 36px; border-color: var(--border-strong);">
        <div style="width: 64px; height: 64px; border-radius: 14px; background: var(--ai-soft); display: flex; align-items: center; justify-content: center; margin-bottom: 28px;">
         """
         
        with open('public/pitch.html', 'w', encoding='utf-8') as f:
            f.write(content + wrapper + part3)
        print("Success")
    else:
        print("Could not find <div class=card")
else:
    print("Could not find 02 · Dados proprietários")
