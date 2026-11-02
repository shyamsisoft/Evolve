import os
import math
from PIL import Image, ImageDraw, ImageFont

def make_gif():
    width = 720
    height = 360
    num_frames = 48
    fps = 20
    
    # Brand colors
    navy_dark = (6, 26, 46)
    navy_card = (11, 38, 68)
    navy_card_border = (255, 255, 255, 30)
    teal_dark = (0, 119, 145)
    teal_logo = (24, 176, 166)
    emerald_logo = (43, 182, 115)
    emerald_bright = (52, 211, 153)
    text_white = (255, 255, 255)
    text_slate = (148, 163, 184)
    grid_color = (255, 255, 255, 18)

    # Output directory
    out_dir = r"d:\Evolve\public\images"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "finance_animated.gif")

    frames = []

    # 10 bars for background volume
    num_bars = 10
    base_bar_heights = [45, 60, 52, 75, 68, 90, 82, 110, 102, 125]

    for frame_idx in range(num_frames):
        t = frame_idx / num_frames
        angle = t * 2 * math.pi

        # Create RGBA canvas
        im = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        draw = ImageDraw.Draw(im)

        # Draw outer rounded card background
        card_margin = 12
        card_rect = [card_margin, card_margin, width - card_margin, height - card_margin]
        draw.rounded_rectangle(card_rect, radius=24, fill=(8, 30, 54, 255), outline=(255, 255, 255, 38), width=2)

        # Header area
        draw.text((36, 32), "FINANCIAL MOMENTUM & TELEMETRY", fill=emerald_logo)
        
        # Live status pill
        pulse_alpha = int(180 + 75 * math.sin(angle))
        draw.rounded_rectangle([420, 28, 540, 52], radius=12, fill=(0, 119, 145, 60), outline=(24, 176, 166, pulse_alpha), width=1)
        draw.ellipse([432, 36, 440, 44], fill=emerald_bright)
        draw.text((448, 32), "FP&A ACTIVE", fill=(255, 255, 255, 240))

        # Metric value
        metric_val = 32.4 + 4.2 * math.sin(angle)
        draw.text((564, 30), f"+{metric_val:.1f}%", fill=emerald_bright)

        # Divider line under header
        draw.line([36, 68, width - 36, 68], fill=(255, 255, 255, 24), width=1)

        # Chart area dimensions
        chart_left = 60
        chart_right = width - 50
        chart_top = 100
        chart_bottom = height - 55

        # Draw horizontal grid lines
        for i in range(4):
            y = chart_top + i * ((chart_bottom - chart_top) / 3)
            draw.line([chart_left, y, chart_right, y], fill=(255, 255, 255, 16), width=1)
            # Label
            lbl = f"${(4 - i) * 2.5:.1f}M"
            draw.text((22, y - 7), lbl, fill=(100, 116, 139, 220))

        # Draw animated volume bars in background
        bar_w = 28
        bar_spacing = (chart_right - chart_left) / num_bars
        for b_idx in range(num_bars):
            bx = chart_left + b_idx * bar_spacing + 12
            # Animated height with phase offset
            wave = math.sin(angle + b_idx * 0.6)
            b_height = base_bar_heights[b_idx] * 1.3 + wave * 14
            by = chart_bottom - b_height
            
            # Bar body
            bar_color = (0, 119, 145, 65) if b_idx < 6 else (43, 182, 115, 80)
            draw.rounded_rectangle([bx, by, bx + bar_w, chart_bottom], radius=6, fill=bar_color)
            # Bar top cap highlight
            cap_color = (24, 176, 166, 180) if b_idx < 6 else (52, 211, 153, 210)
            draw.rounded_rectangle([bx, by, bx + bar_w, by + 4], radius=2, fill=cap_color)

        # Benchmark target dotted line
        pts_bench = []
        for step in range(12):
            bx = chart_left + step * ((chart_right - chart_left) / 11)
            by = chart_bottom - (50 + step * 14 + 10 * math.sin(step * 0.5))
            pts_bench.append((bx, by))
        
        for k in range(len(pts_bench) - 1):
            if k % 2 == 0:
                draw.line([pts_bench[k], pts_bench[k+1]], fill=(148, 163, 184, 80), width=2)

        # Primary financial trend line (Spline points with smooth animated undulation)
        pts = []
        num_pts = 40
        for i in range(num_pts):
            px = chart_left + i * ((chart_right - chart_left) / (num_pts - 1))
            norm_x = i / (num_pts - 1)
            # Exponential trajectory curve with animated harmonics
            base_y = chart_bottom - (40 + 170 * (norm_x ** 1.35))
            wave_harm = 12 * math.sin(angle + norm_x * 4 * math.pi) * norm_x
            py = base_y - wave_harm
            pts.append((px, py))

        # Draw gradient area fill polygon under curve
        fill_poly = [(pts[0][0], chart_bottom)] + pts + [(pts[-1][0], chart_bottom)]
        # Semi-transparent polygon overlay
        draw.polygon(fill_poly, fill=(24, 176, 166, 35))

        # Draw glowing trajectory line
        for k in range(len(pts) - 1):
            # Gradient color from teal to emerald
            ratio = k / (len(pts) - 1)
            lr = int(0 * (1 - ratio) + 43 * ratio)
            lg = int(176 * (1 - ratio) + 210 * ratio)
            lb = int(166 * (1 - ratio) + 115 * ratio)
            # Outer glow
            draw.line([pts[k], pts[k+1]], fill=(lr, lg, lb, 90), width=6)
            # Core bright line
            draw.line([pts[k], pts[k+1]], fill=(lr, lg, lb, 255), width=3)

        # Animated Traveling Pulse Node along the curve
        node_pos = (t * 1.5) % 1.0  # travels and loops
        node_idx = int(node_pos * (len(pts) - 1))
        nx, ny = pts[node_idx]

        # Expanding ripple waves around traveling node
        ripple_radius = 8 + 12 * ((frame_idx % 16) / 16.0)
        ripple_alpha = int(180 * (1.0 - (frame_idx % 16) / 16.0))
        draw.ellipse([nx - ripple_radius, ny - ripple_radius, nx + ripple_radius, ny + ripple_radius], outline=(43, 182, 115, ripple_alpha), width=2)
        
        # Center glowing bead
        draw.ellipse([nx - 6, ny - 6, nx + 6, ny + 6], fill=(52, 211, 153, 255), outline=(255, 255, 255, 255), width=2)

        # Leading edge tip (last point)
        tip_x, tip_y = pts[-1]
        draw.ellipse([tip_x - 5, tip_y - 5, tip_x + 5, tip_y + 5], fill=emerald_bright, outline=text_white, width=2)

        # Bottom X-Axis labels
        x_labels = ["Q1 ADVISORY", "Q2 OPERATING MODEL", "Q3 TRANSFORMATION", "Q4 TARGET TOM"]
        for idx, lbl in enumerate(x_labels):
            lx = chart_left + idx * ((chart_right - chart_left) / 3) - 15
            draw.text((lx, chart_bottom + 12), lbl, fill=(148, 163, 184, 200))

        # Convert RGBA to RGB on solid dark background for GIF compatibility
        rgb_im = Image.new("RGB", (width, height), navy_dark)
        rgb_im.paste(im, (0, 0), im)
        
        # Quantize to adaptive palette
        paletted = rgb_im.quantize(colors=128, method=Image.Quantize.MEDIANCUT)
        frames.append(paletted)

    # Save animated GIF
    frames[0].save(
        out_path,
        save_all=True,
        append_images=frames[1:],
        duration=50,  # 50ms per frame = 20 fps
        loop=0,
        optimize=True
    )
    print(f"Animated GIF saved successfully to: {out_path} ({os.path.getsize(out_path)} bytes)")

if __name__ == "__main__":
    make_gif()
