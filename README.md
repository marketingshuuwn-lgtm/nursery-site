# موقع مشتل سلطان العتيبي الزراعية

موقع تعريفي (صفحة واحدة) لمشتل زراعي في الرياض — Next.js (App Router) + TypeScript + Tailwind CSS v4، بواجهة عربية RTL أصيلة.

## التشغيل

```bash
npm install
npm run dev      # بيئة التطوير: http://localhost:3000
npm run build    # بناء الإنتاج
npm start        # تشغيل نسخة الإنتاج
```

## أين يُخزَّن المحتوى؟

كل النصوص، روابط التواصل، الخدمات، النباتات، والأسئلة الشائعة في ملف واحد:

```
src/content/site-content.ts
```

لا توجد نصوص مكتوبة داخل المكونات — لتغيير أي نص عدّل هذا الملف فقط.

## الصور

لا توجد صور حقيقية للنشاط بعد، لذلك تُستخدم مكونات `ImagePlaceholder` معلَّمة بـ `[IMAGE REQUIRED: code]`.
لإضافة صورة حقيقية:

1. ضع الصورة في `public/images/` (مثل `public/images/hero.jpg`).
2. في مكون القسم (مثل `Hero.tsx`)، استبدل `<ImagePlaceholder ... />` بـ:

```tsx
import Image from "next/image";
<Image
  src="/images/hero.jpg"
  alt="حديقة منزلية منفذة من مشتل سلطان العتيبي"
  width={1200}
  height={1500}
  className="rounded-[2rem] object-cover"
  priority // للصورة الرئيسية فقط
/>;
```

## الألوان

معرَّفة في `src/app/globals.css` داخل `@theme`:
- `forest-*`: أخضر الغابات (الهوية الأساسية)
- `cream-*`: خلفيات دافئة
- `clay-*`: لون التمييز (تراكوتا)

> ملاحظة: هذه لوحة مشتقة من الاتجاه البصري وليست ألوانًا رسمية للعلامة.

## الخطوط

في `src/app/layout.tsx` عبر `next/font/google`:
- العناوين: `Noto Kufi Arabic` → `font-display`
- النصوص: `Tajawal` → `font-body`

## إضافة عنصر للخدمات / نبات / سؤال شائع

كلها مصفوفات في `src/content/site-content.ts`:
- الخدمات: `services.items` (مع مفتاح أيقونة من `src/types/content.ts`)
- النباتات (وسوم الخدمة 03): `services.items[2].plants`
- تصنيفات النباتات الداخلية: `indoorPlants.categories`
- الأسئلة: `faq.items`

## إضافة قسم جديد

1. أنشئ مكونًا في `src/components/sections/`.
2. أضفه في `src/app/page.tsx` داخل `<main>`.
3. أضف معرّف القسم `id` وقائمته في `nav.links` بمحتوى الموقع.

## SEO

- `title` و `description` و Open Graph في `layout.tsx` (مصدرها `seo` في ملف المحتوى).
- بيانات منظمة `LocalBusiness` في `src/lib/seo.ts` — بمعلومات موثقة فقط.
- `sitemap.xml` و `robots.txt` تلقائيان.
- **قبل النشر**: عيّن `NEXT_PUBLIC_SITE_URL` في `.env.local` بالنطاق الرسمي.

## الربط مع CMS لاحقًا

واجهة العرض تقرأ من كائن `siteContent` فقط. للانتقال إلى CMS (Sanity / Contentful / Strapi / WordPress):
اجعل `site-content.ts` يجلب البيانات من مصدرها بنفس الشكل (Types موجودة في `src/types/content.ts`)، ولن تحتاج لتعديل أي مكون.
