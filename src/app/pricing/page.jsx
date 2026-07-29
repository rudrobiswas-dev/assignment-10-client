import { Button } from "@heroui/react";

export default function SellerPricingPage() {
  const plans = [
  {
    name: "Basic Trainer",
    price: "$9",
    period: "/month",
    description: "Perfect for new trainers starting their fitness coaching journey.",
    features: [
      "Create trainer profile",
      "List up to 5 classes",
      "Accept member bookings",
      "Basic performance dashboard",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro Trainer",
    price: "$29",
    period: "/month",
    description: "Ideal for professional trainers looking to grow their client base.",
    features: [
      "Unlimited classes",
      "Unlimited client bookings",
      "Advanced analytics",
      "Personal training sessions",
      "Priority listing",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Elite Trainer",
    price: "$59",
    period: "/month",
    description: "Designed for top fitness professionals and gym coaches.",
    features: [
      "Everything in Pro Trainer",
      "Featured trainer badge",
      "Homepage promotion",
      "Custom workout programs",
      "Nutrition plan management",
      "24/7 premium support",
    ],
    popular: false,
  },
];

  return (
    <main className="mt-15">
      {/* Hero */}
<section className="mx-auto max-w-7xl px-4 py-20 text-center">
  <span className="inline-flex rounded-full border px-4 py-1 text-sm font-medium">
    Become a Trainer
  </span>

  <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
    Inspire Others.
    <span className="block text-orange-700">
      Build Your Fitness Career
    </span>
  </h1>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
    Join Blacksmith Athletics as a certified trainer and grow your personal
    brand. Create fitness classes, coach members, manage bookings, and help
    people achieve their health and wellness goals.
  </p>
</section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 shadow-sm transition-all hover:shadow-xl ${
                plan.popular ? "border-orange-700 ring-2 ring-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-4 py-1 text-sm font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-3 text-muted-foreground">{plan.description}</p>

              <div className="mt-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.name === "Enterprise Seller" ? (
                <Button
                  className={`mt-8 w-full  font-medium`}
                >Contact Sales</Button>
              ) : (
                <form method="POST" action={'/api/subscription'}>
                  <Button type="submit"
                  className={`mt-8 w-full  font-medium glitch-btn rounded-none`}
                >Become Seller</Button>
                </form>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
<section className="border-t mx-28">  
  <div className="mx-auto max-w-7xl px-4 py-20">
    <h2 className="text-center text-3xl font-bold">
      Why Train With Blacksmith Athletics?
    </h2>

    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border p-6 transition hover:shadow-lg">
        <h3 className="font-semibold">Certified Trainers</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Train with experienced and certified fitness professionals who help
          you achieve your goals safely.
        </p>
      </div>

      <div className="rounded-2xl border p-6 transition hover:shadow-lg">
        <h3 className="font-semibold">Modern Equipment</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Access premium strength and cardio equipment designed for every
          fitness level.
        </p>
      </div>

      <div className="rounded-2xl border p-6 transition hover:shadow-lg">
        <h3 className="font-semibold">Flexible Classes</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Join yoga, HIIT, strength training, cardio, and personal coaching at
          times that fit your schedule.
        </p>
      </div>

      <div className="rounded-2xl border p-6 transition hover:shadow-lg">
        <h3 className="font-semibold">Track Your Progress</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Monitor workouts, body progress, and fitness milestones through your
          personalized dashboard.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
<section className="mx-auto max-w-5xl px-4 py-20">
  <div className="rounded-3xl border bg-gradient-to-r from-orange-700 to-orange-500 p-10 text-center">
    <h2 className="text-3xl font-bold">
      Ready to Transform Your Fitness?
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
      Join Blacksmith Athletics today and take the first step toward a stronger,
      healthier, and more confident you. Train with expert coaches, book classes,
      and track your progress—all in one place.
    </p>

    <button className="glitch-btn mt-8 rounded-xl bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:scale-105 hover:shadow-lg">
      Join Now
    </button>
  </div>
</section>
    </main>
  );
}
