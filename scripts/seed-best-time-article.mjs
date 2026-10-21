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
  slug: "best-time-to-visit-chichen-itza",
  title: "Best Time to Visit Chichen Itza: Weather, Crowds & Hours",
  metaTitle: "Best Time to Visit Chichen Itza 2026: Weather, Crowds & Tips",
  metaDescription: "Plan your trip with our guide on the best time to visit Chichen Itza. Discover the best months, early morning opening hours, heat tips, and seasonal crowds.",
  category: "Trip Planning",
  excerpt: "Discover the best time to visit Chichen Itza in Mexico, covering the best months, early morning opening hours, tropical heat, crowds, and the equinox.",
  quickAnswer: "The absolute best time to visit Chichen Itza is early morning right at the 8:00 AM opening gate, or late afternoon after 3:00 PM. The best months are November through April during the Yucatan dry season, when temperatures are milder and rainfall is minimal.",
  readTime: "5 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21T07:15:00.000Z",
  image: "https://v2b29t9itcyewmk7.public.blob.vercel-storage.com/chichen-itza-best-time-to-visit-YHelv4An4HTedBYxJBPyVThiswgNyI.jpg",
  imageAlt: "El Castillo pyramid at Chichen Itza illuminated by warm morning sunlight under a clear sky",
  recommendedTourId: "chichen-itza-early-access-archeologist-tour",
  recommendedTourAfterBlock: 1,
  focusKeyword: "best time to visit Chichen Itza",
  ctaHeading: "Ready to visit Chichen Itza?",
  ctaBody: "Compare early access tours, all-inclusive day trips, and skip-the-line tickets on our homepage.",
  ctaButtonText: "Compare Chichen Itza Tours →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.bookchichenitzatour.com/blog/best-time-to-visit-chichen-itza",
  ogTitle: "Best Time to Visit Chichen Itza: Weather, Crowds & Hours",
  ogDescription: "Complete 2026 traveler guide on the best time to visit Chichen Itza: dry season months, morning hours, tropical heat, and avoiding crowds.",
  ogImage: "https://v2b29t9itcyewmk7.public.blob.vercel-storage.com/chichen-itza-best-time-to-visit-YHelv4An4HTedBYxJBPyVThiswgNyI.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">As one of the New Seven Wonders of the World and a UNESCO World Heritage site, the ancient Mayan city of Chichen Itza in Yucatan, Mexico, attracts over 2.5 million visitors each year. Spanning four square miles of open archaeological ruins, the site offers little shade beneath the tropical sun. Choosing the <strong>best time to visit Chichen Itza</strong> makes the difference between a tranquil, awe-inspiring encounter with ancient astronomy and an exhausting march through sweltering heat and packed crowds.</p>

<div class="pro-tip-box"><span class="pro-tip-icon">💡</span><div><strong>Pro Tip for 2026 Visitors:</strong> Tour buses from Cancun, Playa del Carmen, and Riviera Maya resorts typically arrive between 10:30 AM and 11:30 AM. Arriving at the entrance gates by 7:45 AM for the 8:00 AM opening guarantees two full hours of quiet exploration and comfortable temperatures before midday crowds arrive.</div></div>

<h2>Best Time of Day to Visit Chichen Itza</h2>
<p>Daily timing is the single most critical factor when planning your archaeological tour. Two distinct daily windows offer the most rewarding visitor experience:</p>
<ul>
  <li><strong>Opening at 8:00 AM (Recommended):</strong> Stepping onto the main plaza at 8:00 AM lets you view the iconic El Castillo pyramid rising against clear morning skies with virtually nobody else in your camera frame. Temperatures average a pleasant 24°C (75°F), allowing you to walk comfortably to distant structures like the Great Ball Court and El Caracol observatory.</li>
  <li><strong>Late Afternoon (After 3:00 PM):</strong> Crowd density drops dramatically after 2:30 PM as day-trip coaches depart for cenote lunches and return journeys. The lower afternoon sun produces dramatic shadows across the pyramid steps, though you must monitor the 5:00 PM site closure.</li>
</ul>

<h2>Best Months and Seasons to Visit</h2>
<p>Yucatan features a tropical savannah climate with two distinct seasons that determine weather and crowd levels.</p>

<h3>Dry Season: November to April (Best Overall Weather)</h3>
<p>Winter and early spring represent the overall best time to visit Chichen Itza. Humidity is low, skies are sunny, and rainfall is rare. Daytime highs average 28°C to 31°C (82°F–88°F), making the long open-air walks far more manageable. Because this coincides with international peak travel season, arriving early in the morning is essential.</p>

<figure><img src="https://v2b29t9itcyewmk7.public.blob.vercel-storage.com/chichen-itza-ball-court-temple-mJSvVXqbuB2RBbgw1PijpCNo420isj.jpg" alt="The ancient stone walls of the Great Ball Court at Chichen Itza in the Yucatan peninsula" /><figcaption>The Great Ball Court and ancient temple ruins bathed in soft morning light before midday tour buses arrive.</figcaption></figure>

<h3>Rainy Season: May to October (Fewer Crowds, Higher Heat)</h3>
<p>May is often the hottest month of the year, with temperatures regularly exceeding 38°C (100°F). From June through October, tropical humidity climbs, and heavy afternoon downpours occur frequently. However, ruins are lush and green, and tourist numbers drop significantly outside summer holiday weeks.</p>

<h3>The Equinox Phenomenon (March & September)</h3>
<p>During the Spring Equinox (March 20–22) and Autumn Equinox (September 21–23), the afternoon sun creates a natural shadow serpent descending El Castillo's northern staircase. While culturally captivating, these dates draw upwards of 20,000 visitors in a single afternoon.</p>

<h2>Essential Practical Tips for Planning Your Visit</h2>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Book Early Access Tickets or Tours:</strong> Secure certified early-access skip-the-line tickets to bypass main ticket lines.</li>
  <li><span class="check-circle">✓</span><strong>Pack Sun Protection:</strong> Bring broad-spectrum sunscreen, UV sunglasses, and a wide-brimmed hat, as shaded rest spots are sparse.</li>
  <li><span class="check-circle">✓</span><strong>Stay Hydrated:</strong> Carry at least 1.5 liters of drinking water per person in reusable bottles.</li>
  <li><span class="check-circle">✓</span><strong>Pair with a Cenote:</strong> Cool off after your morning ruins tour with a refreshing swim at nearby Cenote Ik Kil or Cenote Saamal.</li>
</ul>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 500-600 words)`);
  if (wordCount < 500 || wordCount > 600) {
    throw new Error(`Word count ${wordCount} outside allowable 500-600 range!`);
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
      category: p.category || "Trip Planning",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "5 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      recommendedTourId: p.recommended_tour_id || "chichen-itza-early-access-archeologist-tour",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to visit Chichen Itza?",
      ctaBody: p.cta_body || "Compare early access tours, all-inclusive day trips, and skip-the-line tickets on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Chichen Itza Tours →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "best time to visit Chichen Itza",
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
