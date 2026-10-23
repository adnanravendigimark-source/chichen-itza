import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const articleData = {
  slug: "chichen-itza-tours-guided-private-trips",
  title: "Chichen Itza Tours: Guided Tours, Private Trips & What to Expect",
  metaTitle: "Chichen Itza Tours: Guided Tours, Private Trips & Tips",
  metaDescription: "Compare Chichen Itza tours in Mexico. Discover guided vs self-guided visits, day trips from Cancun, private VIP options, transport, and expert tips.",
  category: "Tour Guide",
  excerpt: "Discover the best Chichen Itza tours from Cancun and Riviera Maya. Compare guided day trips, private excursions, inclusions, transport, and site rules.",
  quickAnswer: "Chichen Itza tours range from budget-friendly group day trips with round-trip hotel transit, cenote swimming, and buffet lunch to customized private VIP excursions with dedicated archaeologist guides. Booking an organized tour eliminates 5–6 hours of complex highway driving, handles all mandatory federal INAH and state CULTUR entrance fees, and includes certified bilingual storytelling. Note that climbing El Castillo or any pyramid structure is strictly prohibited.",
  readTime: "6 min read",
  date: "2026-10-23",
  updatedAt: "2026-10-23T06:00:00.000Z",
  image: "https://v2b29t9itcyewmk7.public.blob.vercel-storage.com/chichen-itza-guided-tour-gSLM5US5mS6YTkkmUhLIznZpZGjbgL.jpg",
  imageAlt: "A professional archaeologist guide explaining El Castillo pyramid to a small tour group at Chichen Itza",
  recommendedTourId: "chichen-itza-cenote-valladolid-all-inclusive-tour",
  recommendedTourAfterBlock: 1,
  focusKeyword: "Chichen Itza tours",
  ctaHeading: "Ready to explore Chichen Itza?",
  ctaBody: "Compare early access tours, all-inclusive day trips, and skip-the-line tickets on our homepage.",
  ctaButtonText: "Compare Chichen Itza Tours →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.bookchichenitzatour.com/blog/chichen-itza-tours-guided-private-trips",
  ogTitle: "Chichen Itza Tours: Guided Tours, Private Trips & What to Expect",
  ogDescription: "Compare Chichen Itza tours in Mexico. Discover guided vs self-guided visits, day trips from Cancun, private VIP options, transport, and expert tips.",
  ogImage: "https://v2b29t9itcyewmk7.public.blob.vercel-storage.com/chichen-itza-guided-tour-gSLM5US5mS6YTkkmUhLIznZpZGjbgL.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Rising dramatically above the dense limestone jungle of Mexico’s Yucatan Peninsula, Chichen Itza is one of the New Seven Wonders of the World and a UNESCO World Heritage site. Spanning four square miles of ancient Mayan ceremonial architecture, this complex draws over two million travelers annually. Because the site sits roughly 120 miles inland from the Caribbean coast, choosing the right <strong>Chichen Itza tours</strong> is the most convenient way to visit. Whether you seek an all-inclusive day trip or an intimate private excursion, understanding tour options, inclusions, and site rules ensures an unforgettable expedition.</p>

<div class="pro-tip-box">
  <span class="pro-tip-icon">💡</span>
  <div><strong>Important Archaeological Rule:</strong> Climbing El Castillo (the Temple of Kukulcán) and other ancient ruins at Chichen Itza is strictly prohibited by Mexico’s National Institute of Anthropology and History (INAH). Protective cordons surround all monuments to preserve the 1,000-year-old carvings and ensure visitor safety.</div>
</div>

<h2>Guided vs. Self-Guided Visits: Why an Expert Guide Matters</h2>
<p>While independent travelers can rent a car and drive across Yucatan toll roads, exploring without an expert guide leaves most history hidden. Chichen Itza’s monuments were constructed as astronomical calendars and acoustic marvels that require specialized interpretation.</p>
<p>A certified <strong>Chichen Itza guided tour</strong> brings these stone ruins to life. Licensed INAH guides explain the Maya calendar embedded in El Castillo’s 365 steps, demonstrate the acoustic quetzal bird echo triggered by clapping at the northern staircase, and interpret the skull carvings along the Tzompantli platform. Guides also navigate the four-square-mile site efficiently, steering you through shaded trails during midday heat.</p>

<h2>Types of Chichen Itza Tours: Group Excursions vs. Private Trips</h2>
<p>Operators offer three main tour styles tailored to different budgets and travel preferences:</p>

<h3>1. Classic All-Inclusive Group Day Tours</h3>
<p>The most popular choice, classic group tours provide comprehensive value. Traveling aboard air-conditioned motorcoaches, these full-day excursions pair archaeological exploration with a swim in a freshwater cenote and a Yucatecan buffet lunch. They offer a relaxed, social atmosphere at an accessible price point.</p>

<h3>2. Early-Access Small-Group Tours</h3>
<p>Designed for photographers and history enthusiasts, early-access tours depart before dawn to reach the gates for the 8:00 AM opening. You explore the ceremonial grounds in tranquil morning light with mild 24°C (75°F) temperatures, well before large tour coaches arrive.</p>

<h3>3. Private VIP Excursions</h3>
<p>A <strong>private Chichen Itza tour</strong> delivers total flexibility and personalized service. Traveling in a private vehicle with your own dedicated archaeologist guide, you set your departure time, customize the itinerary, explore monuments at your own pace, and visit quiet cenotes away from bus crowds.</p>

<figure>
  <img src="https://v2b29t9itcyewmk7.public.blob.vercel-storage.com/chichen-itza-private-tour-fWfnMRCVYZDAQI7Unvs7opnfhYsFF0.jpg" alt="A couple enjoying an exclusive private Chichen Itza tour with a dedicated archaeologist guide near El Caracol observatory" />
  <figcaption>Private Chichen Itza tours offer personalized commentary, flexible pacing, and serene exploration near El Caracol observatory without the crowds.</figcaption></figure>

<div class="ticket-comparison-wrapper">
  <table class="ticket-comparison-table">
    <thead>
      <tr>
        <th>Tour Category</th>
        <th>Group Size</th>
        <th>Key Inclusions</th>
        <th>Best Suited For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>All-Inclusive Group Tour</strong></td>
        <td>20–40 Travelers</td>
        <td>Coach transport, guide, cenote swim, buffet lunch, Valladolid</td>
        <td>First-time visitors & budget travelers</td>
      </tr>
      <tr>
        <td><strong>Early Access Tour</strong></td>
        <td>10–15 Travelers</td>
        <td>Early 8:00 AM entry, expert archaeologist guide, morning snacks</td>
        <td>Photographers & morning travelers</td>
      </tr>
      <tr>
        <td><strong>Private VIP Tour</strong></td>
        <td>Private Party Only</td>
        <td>Luxury transport, dedicated guide, flexible schedule, gourmet lunch</td>
        <td>Couples, families & VIP travelers</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Transportation: Planning Your Chichen Itza Day Trip from Cancun</h2>
<p>Chichen Itza is located roughly 120 miles (195 kilometers) west of Cancun and 115 miles (185 kilometers) west of Playa del Carmen. A standard <strong>Chichen Itza day trip from Cancun</strong> takes approximately 2.5 to 3 hours each way along federal toll highway 180D.</p>
<p>Joining an organized tour eliminates the hassle of navigating highway toll booths, checkpoints, and rental car logistics. Tour coaches feature air conditioning, restrooms, and cold water. Note that Quintana Roo (Cancun and Riviera Maya) operates on Eastern Standard Time, while Yucatan state observes Central Time during parts of the year; organized tours manage these time changes seamlessly so you never miss scheduled entry slots.</p>

<h2>What Typical Chichen Itza Tours Include</h2>
<p>A quality tour package typically covers the following elements:</p>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Round-Trip Hotel Transport:</strong> Direct pickup and drop-off from hotel lobbies throughout Cancun, Playa del Carmen, and Riviera Maya.</li>
  <li><span class="check-circle">✓</span><strong>Certified Bilingual Guide:</strong> Guided commentary covering the Great Ball Court, Temple of the Warriors, and Observatory, followed by free exploration.</li>
  <li><span class="check-circle">✓</span><strong>Sacred Cenote Swim Stop:</strong> Access to iconic sinkholes such as Cenote Ik Kil or Cenote Saamal, including life jacket rentals.</li>
  <li><span class="check-circle">✓</span><strong>Regional Yucatan Buffet:</strong> Authentic cuisine featuring dishes like cochinita pibil (slow-roasted pork), fresh tortillas, and seasonal fruit.</li>
  <li><span class="check-circle">✓</span><strong>Colonial Valladolid Stop:</strong> A walking tour through the 16th-century central plaza and San Servacio church in charming Valladolid.</li>
</ul>

<h2>Tips for Choosing the Right Tour and What to Pack</h2>
<p>To maximize your experience, keep these practical tips in mind when booking <strong>Chichen Itza tours</strong>:</p>
<ul>
  <li><strong>Verify Entrance Fee Inclusions:</strong> Admission requires both a federal INAH fee and a state CULTUR fee. Ensure your tour explicitly includes both fees to avoid paying extra at the gate.</li>
  <li><strong>Wear Breathable Clothing & Walking Shoes:</strong> The open limestone grounds provide minimal shade. Wear lightweight shirts, UV sunglasses, and supportive walking shoes.</li>
  <li><strong>Bring Biodegradable Sunscreen & Cash:</strong> Chemical sunscreens are prohibited at cenotes to protect natural water systems. Carry Mexican pesos in cash for artisan souvenirs.</li>
</ul>

<h2>Frequently Asked Questions About Chichen Itza Tours</h2>

<h3>How far in advance should I book Chichen Itza tours?</h3>
<p>Booking online 3 to 7 days in advance is strongly recommended, especially from December through April. Early-access and private tours often sell out weeks ahead.</p>

<h3>Can you climb the pyramid at Chichen Itza?</h3>
<p>No. Climbing El Castillo (the Pyramid of Kukulcán) has been strictly prohibited since 2006 by INAH regulations to preserve the historic monument and protect visitors from steep stairways.</p>

<h3>Is Chichen Itza worth a full day trip from Cancun?</h3>
<p>Yes, absolutely. Combining the ancient Mayan wonder with a refreshing cenote swim and a colonial town visit creates one of the most memorable day excursions in Mexico.</p>

<h3>What is the difference between private and group tours?</h3>
<p>Group tours operate on fixed coach schedules with larger groups. Private tours provide private transportation, flexible start times, a dedicated guide, and personalized itineraries at your own pace.</p>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 800-1000 words)`);
  if (wordCount < 800 || wordCount > 1000) {
    throw new Error(`Word count ${wordCount} outside allowable 800-1000 range!`);
  }

  // 1. Upsert into database
  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleData.slug}, ${articleData.title}, ${articleData.metaTitle}, ${articleData.metaDescription}, ${articleData.category},
      ${articleData.excerpt}, ${articleData.quickAnswer}, ${articleData.readTime}, ${articleData.date}, ${articleData.updatedAt},
      ${articleData.image}, ${articleData.imageAlt},
      ${articleData.recommendedTourId}, ${articleData.recommendedTourAfterBlock},
      ${JSON.stringify(articleData.content)}::jsonb, ${articleData.sortOrder},
      ${articleData.ctaHeading}, ${articleData.ctaBody}, ${articleData.ctaButtonText}, ${articleData.ctaButtonHref}, ${articleData.focusKeyword},
      ${articleData.noIndex}, ${articleData.noFollow}, ${articleData.canonicalUrl}, ${articleData.ogTitle}, ${articleData.ogDescription}, ${articleData.ogImage}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
  console.log("✓ Successfully upserted into Neon posts table!");

  // 2. Fetch all current DB posts and synchronize data/posts.json
  const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC`;
  console.log(`Synchronizing ${allDbPosts.length} posts to data/posts.json...`);

  const jsonPosts = allDbPosts.map((p) => {
    let contentVal = p.content;
    if (typeof contentVal !== "string") {
      try {
        contentVal = typeof contentVal === "object" ? JSON.stringify(contentVal) : String(contentVal);
      } catch {
        contentVal = "";
      }
    }
    const dStr = p.date instanceof Date ? p.date.toISOString().slice(0, 10) : String(p.date || "").slice(0, 10);
    const uStr = p.updated_at instanceof Date ? p.updated_at.toISOString() : (p.updated_at ? String(p.updated_at) : dStr);

    return {
      slug: p.slug,
      title: p.title,
      metaTitle: p.meta_title || p.title,
      metaDescription: p.meta_description || p.excerpt,
      category: p.category || "Tour Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "6 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      recommendedTourId: p.recommended_tour_id || "chichen-itza-cenote-valladolid-all-inclusive-tour",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to explore Chichen Itza?",
      ctaBody: p.cta_body || "Compare early access tours, all-inclusive day trips, and skip-the-line tickets on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Chichen Itza Tours →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "Chichen Itza tours",
      noIndex: !!p.no_index,
      noFollow: !!p.no_follow,
      canonicalUrl: p.canonical_url || `https://www.bookchichenitzatour.com/blog/${p.slug}`,
      ogTitle: p.og_title || p.meta_title || p.title,
      ogDescription: p.og_description || p.meta_description || p.excerpt,
      ogImage: p.og_image || p.image || ""
    };
  });

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(jsonPosts, null, 2), "utf-8");
  console.log(`✓ Synchronized data/posts.json with ${jsonPosts.length} posts.`);

  console.log("\nArticle Seed Summary:");
  console.log("- Title:", articleData.title);
  console.log("- Slug:", articleData.slug);
  console.log("- Focus Keyword:", articleData.focusKeyword);
  console.log("- Word Count:", wordCount);
  console.log("- Cover Image:", articleData.image);
  console.log("- Public URL:", articleData.canonicalUrl);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
