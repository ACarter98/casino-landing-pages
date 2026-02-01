# 🚀 CASINO LANDING PAGES - DEPLOYMENT CHECKLIST

**Repository:** https://github.com/ACarter98/casino-landing-pages

---

## ✅ STEP 1: Enable GitHub Pages

1. Go to: https://github.com/ACarter98/casino-landing-pages/settings/pages
2. Under "Source", select: **Deploy from a branch**
3. Under "Branch", select: **master** → **/(root)**
4. Click **Save**
5. Wait 2-5 minutes for deployment

**Live URL will be:** https://acarter98.github.io/casino-landing-pages/

---

## ✅ STEP 2: Submit to Google Search Console

### Add Property:
1. Go to: https://search.google.com/search-console
2. Click "Add Property" → "URL prefix"
3. Enter: `https://acarter98.github.io/casino-landing-pages/`
4. Verify ownership (HTML tag method recommended)

### Submit Sitemap:
1. In Search Console, go to "Sitemaps" (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"

### Request Indexing for Priority Pages:
1. Go to "URL Inspection" tool
2. Enter each priority URL:
   - `https://acarter98.github.io/casino-landing-pages/best-online-casino-australia/`
   - `https://acarter98.github.io/casino-landing-pages/online-casino-australia-real-money/`
   - `https://acarter98.github.io/casino-landing-pages/fastest-withdrawal-online-casino-canada/`
   - `https://acarter98.github.io/casino-landing-pages/no-deposit-bonus-casino-australia/`
3. Click "Request Indexing" for each

---

## ✅ STEP 3: Update Affiliate Links

Current CTA buttons use `#` placeholders. Update with your actual affiliate URLs:

### File Locations:
```
outputs/sites/casino/best-online-casino-australia/index.html
outputs/sites/casino/online-casino-australia-real-money/index.html
outputs/sites/casino/no-deposit-bonus-casino-australia/index.html
outputs/sites/casino/fastest-withdrawal-online-casino-canada/index.html
```

### Find & Replace:
Search for: `href="#"`
Replace with: `href="YOUR_AFFILIATE_URL"`

Example:
```html
<!-- Before -->
<a href="#" class="cta-button">Claim AU$5000 Bonus →</a>

<!-- After -->
<a href="https://joefortune.com/affiliate_id" class="cta-button">Claim AU$5000 Bonus →</a>
```

---

## ✅ STEP 4: Add Custom Domain (Optional)

If you want to use a custom domain instead of github.io:

1. In repository root, create file: `CNAME`
2. Add your domain: `yourdomain.com`
3. Configure DNS with your registrar:
   - **A Records:** Point to GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **Or CNAME:** Point to `acarter98.github.io`

---

## ✅ STEP 5: Track Performance

### Google Search Console Metrics to Watch:
- **Impressions:** Should start within 3-7 days
- **Clicks:** Should start within 1-2 weeks
- **Average Position:** Target top 10 for KD 1-4 keywords
- **CTR:** Aim for 3-8% on average

### Pages to Monitor:
| Page | Target Position | Timeline |
|------|----------------|----------|
| Best Online Casino Australia | #1-3 (KD 1) | 2-4 weeks |
| Online Casino Real Money AU | #1-5 (KD 4) | 3-6 weeks |
| Fastest Withdrawal Canada | #1-10 (KD 24) | 6-12 weeks |
| No Deposit Bonus AU | #1-15 (KD 46) | 8-16 weeks |

---

## 📊 CURRENT STATUS

| Component | Status |
|-----------|--------|
| Pages Built | ✅ 15 pages complete |
| Schema Markup | ✅ Review + Breadcrumb |
| Sitemap | ✅ Submitted-ready |
| GitHub Repo | ✅ Pushed |
| GitHub Pages | ⏳ Pending activation |
| Search Console | ⏳ Pending submission |
| Affiliate Links | ⏳ Need your URLs |

---

## 🎯 NEXT STEPS (After Deployment)

1. **Build backlinks** to priority pages (KD 1-4 = easy with few links)
2. **Create more content** for Tier 2 keywords
3. **Add comparison tools** for user engagement
4. **A/B test headlines** for better CTR
5. **Monitor rankings** weekly in Search Console

---

## 📞 Support

If you need help with:
- Adding your affiliate links
- Customizing content
- Adding more pages
- SEO optimization

Just ask!

---

**Last Updated:** February 1, 2026