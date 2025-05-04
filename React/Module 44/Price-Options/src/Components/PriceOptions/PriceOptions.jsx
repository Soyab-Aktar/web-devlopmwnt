import PriceOption from "./PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Fit Plan",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "One fitness assessment",
        "Free Wi-Fi",
        "Water station access",
        "Basic mobile app tracking",
      ],
      price: 19.99,
    },
    {
      id: 2,
      name: "Standard Plan",
      features: [
        "All Basic features",
        "1 personal training session/month",
        "Access to group classes",
        "Yoga & Zumba access",
        "Nutritional tips via app",
        "Priority locker access",
      ],
      price: 39.99,
    },
    {
      id: 3,
      name: "Premium Plan",
      features: [
        "All Standard features",
        "Unlimited group classes",
        "Weekly personal trainer session",
        "Free gym merchandise",
        "Spa and sauna access",
        "Diet and workout plans",
        "24/7 gym access",
        "Exclusive mobile app content",
      ],
      price: 69.99,
    },
    {
      id: 4,
      name: "Student Plan",
      features: [
        "Gym access during off-peak hours",
        "2 group classes/month",
        "Fitness assessment",
        "Discounted personal training",
        "Access to student-only sessions",
        "Online progress tracking",
      ],
      price: 14.99,
    },
    {
      id: 5,
      name: "Family Plan",
      features: [
        "Access for up to 4 members",
        "Group training sessions",
        "Diet consultation",
        "Kids fitness programs",
        "Weekend family yoga",
        "Shared mobile dashboard",
        "Complimentary guest passes",
      ],
      price: 99.99,
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-7xl">Best Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
