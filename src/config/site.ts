export const siteConfig = {
  name: "مشتل سلطان العتيبي الزراعية",
  shortName: "مشتل سلطان العتيبي",
  // [VERIFY BEFORE PUBLISHING] — عيّن النطاق الرسمي عبر NEXT_PUBLIC_SITE_URL
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
} as const;
