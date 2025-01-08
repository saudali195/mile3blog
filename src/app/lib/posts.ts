export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
}

export const posts: Post[] = [
  {
    id: "grilled-flank-steak",
    title: "Grilled Flank Steak with Chimichurri",
    description: "A mouthwatering grilled flank steak paired with zesty chimichurri sauce.",
    content: "This delicious grilled flank steak is marinated to perfection and served with a vibrant chimichurri sauce. The combination of herbs and garlic in the chimichurri complements the rich flavor of the steak beautifully.",
    imageUrl: "/f1.jpeg?height=300&width=400"
  },
  {
    id: "mushroom-penne",
    title: "Mushroom Penne with Walnut Pesto",
    description: "A hearty vegetarian pasta dish featuring earthy mushrooms and nutty pesto.",
    content: "This comforting pasta dish combines al dente penne with sautéed mushrooms and a rich walnut pesto. The earthiness of the mushrooms pairs perfectly with the creamy, nutty sauce.",
    imageUrl: "/f2.jpeg?height=300&width=400"
  },
  {
    id: "shrimp-linguine",
    title: "Garlic Butter White Wine Shrimp Linguine",
    description: "A luxurious pasta dish with succulent shrimp in a garlic butter white wine sauce.",
    content: "This elegant shrimp linguine is bathed in a luscious garlic butter white wine sauce. The combination of garlic, butter, and white wine creates a heavenly aroma and flavor that perfectly complements the tender shrimp.",
    imageUrl: "/f3.jpeg?height=300&width=400"
  },
  {
    id: "berns-steak-house",
    title: "Bern's Steak House",
    description: "An iconic steakhouse known for its exceptional cuts and extensive wine collection.",
    content: "Bern's Steak House is a Tampa institution, famous for its dry-aged steaks and impressive wine cellar. With over half a million bottles, it's a paradise for wine enthusiasts and steak lovers alike.",
    imageUrl: "/berns.jpeg?height=500&width=800"
  },
  {
    id: "eewak-korean",
    title: "Eewak Korean Restaurant",
    description: "Authentic Korean cuisine in a cozy, family-run setting.",
    content: "Eewak Korean Restaurant offers a genuine taste of Korea with its traditional dishes and warm atmosphere. From sizzling bulgogi to comforting bibimbap, every dish is prepared with care and authenticity.",
    imageUrl: "/Korean.jpeg?height=300&width=400"
  },
  {
    id: "ramban-vegan",
    title: "The Ramban Vegan House",
    description: "Innovative plant-based cuisine that satisfies vegans and non-vegans alike.",
    content: "The Ramban Vegan House is a haven for plant-based food lovers. With creative dishes that reimagine classic favorites, this restaurant proves that vegan cuisine can be both nutritious and indulgent.",
    imageUrl: "/vegan.jpeg?height=300&width=400"
  },
  {
    id: "maniest-bake",
    title: "Maniest Bake & Cake",
    description: "A charming bakery offering a wide array of freshly baked goods and custom cakes.",
    content: "Maniest Bake & Cake is a local favorite, known for its delectable pastries and stunning custom cakes. From flaky croissants to elaborate wedding cakes, every item is crafted with skill and passion.",
    imageUrl: "/cake.jpeg?height=300&width=400"
  },
  {
    id: "crush-los-angeles",
    title: "Crush Los Angeles",
    description: "A trendy spot offering California-inspired cuisine and craft cocktails.",
    content: "Crush Los Angeles captures the essence of California dining with its fresh, locally-sourced ingredients and innovative cocktails. The vibrant atmosphere and eclectic menu make it a hotspot for food enthusiasts.",
    imageUrl: "/Pizza.jpeg?height=300&width=400"
  },
  {
    id: "mike-winery",
    title: "The Mike Winery",
    description: "A boutique winery producing artisanal wines in a picturesque setting.",
    content: "The Mike Winery is a hidden gem, offering small-batch wines crafted with passion and expertise. Visitors can enjoy tastings while taking in the beautiful vineyard views, making it a perfect weekend getaway.",
    imageUrl: "/wine.jpeg?height=300&width=400"
  }
];

