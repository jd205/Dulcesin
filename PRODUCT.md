# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js (App Router) + TypeScript + Tailwind CSS. Chosen because the site needs both static/content pages (about, story, product showcase) and interactive flows (catalog, cart, fulfillment-method selection), and because checkout/payment integrations (e.g. Stripe) can be added later without a rewrite.

## Users

Customers of Dulcesin browsing and ordering custom cakes and homemade party food online. No other audience (e.g. staff/admin) has been confirmed yet.

## Product Purpose

An online storefront for Dulcesin, a new custom-cake and home-catering business (celebration cakes plus savory bites like empanadas, croquettes, and pasta salad), that lets customers discover past work and place orders. Success today means a customer can browse a photo gallery of real past work and reach out to place an order via WhatsApp; a self-service checkout with fulfillment-method selection is a possible future iteration.

## Positioning

Not yet defined. The user explicitly deferred this — no signature product, style, or story has been confirmed. Do not invent a differentiator; treat this as an open strategic question for later work.

## Operating Context

Dulcesin is a new/concept business — it is not yet an operating physical shop with an established customer base. Longer-term, the storefront may support three fulfillment paths (in-store pickup, local delivery, nationwide shipping), but the current build implements a simpler first iteration: a product catalog where each item links to a WhatsApp chat to complete the order manually. Fulfillment method, payment, and logistics are worked out per-order in that WhatsApp conversation, not in the site.

Which products support which fulfillment method(s), and how the business currently operates day-to-day, has not been confirmed.

## Capabilities and Constraints

- Current iteration: a single-page catalog (Next.js App Router + TypeScript + Tailwind + Framer Motion) with a "Pedir por WhatsApp" button per product that opens `wa.me` with a prefilled message. No cart, no checkout, no fulfillment-method selector yet — deferred, not discarded.
- Payment processing, inventory management, order management/admin tooling, and delivery-radius/shipping-carrier logistics are all undecided — do not assume a specific provider or workflow.
- Product photography is now real (20 photos of actual past work, supplied by the business in `dulcecinGaleria/` and copied into `public/gallery/`), but pricing is still not defined, so cards prompt "ask on WhatsApp" instead of showing a price. The WhatsApp number in `src/lib/config.ts` is still a placeholder to be swapped for the real one.

## Brand Commitments

Business name: Dulcesin (corrected from an earlier placeholder, "Dulce2"). No logo, voice guidelines, or other identity assets have been confirmed.

## Evidence on Hand

Real product photography exists: 20 photos of actual past cakes and catering items, supplied by the business (see `public/gallery/`). Menu/pricing, testimonials, and other brand assets still do not exist. Future work must not fabricate prices or reviews for these real products — the catalog prompts customers to ask pricing on WhatsApp instead of showing an invented number.

## Product Principles

1. Ordering clarity over catalog breadth — with no menu defined yet, prioritize a clear, low-friction path from browsing to completed order over a large product selection.
2. Fulfillment choice is a first-class decision, not an afterthought — pickup, delivery, and shipping are distinct commitments (cost, timing, availability) and should be presented as a real choice, not a checkout-step formality.
3. Build for a business that doesn't exist yet — avoid hard-coding assumptions (single location, fixed hours, specific payment provider) that would need to be ripped out once real operating details are confirmed.
4. Don't manufacture credibility — no invented reviews, press mentions, or "established since" claims for a brand-new concept.
