import balbi34Img from "@/assets/balbi-34.jpg";
import balbi35Img from "@/assets/balbi-35.jpg";
import balbi34Hero from "@/assets/balbi-34-hero.jpg";
import balbi35Hero from "@/assets/balbi-35-hero.jpg";
import balbi34MenuPdf from "@/assets/balbi-34-menu.pdf.asset.json";
import balbi35MenuPdf from "@/assets/balbi-35-menu.pdf.asset.json";

export type MenuItem = { name: string; description: string; price: string };
export type MenuSection = { title: string; items: MenuItem[] };

export type Restaurant = {
  id: string;
  name: string;
  city: string;
  tagline: string;
  image: string;
  hero: string;
  href: string;
  address: string;
  hours: string;
  phone: string;
  mapQuery: string;
  about: string;
  menu: MenuSection[];
  instagram: string;
  whatsapp: string;
  menuPdf: string;
};

export const restaurants: Restaurant[] = [
  {
    id: "balbi-34",
    name: "Balbi 34",
    city: "SARANDË",
    tagline: "Seasonal plates with Genovese roots by the sea.",
    image: balbi34Img,
    hero: balbi34Hero,
    href: "/r/balbi-34",
    address: "Rruga Skënderbeu 34, Sarandë 9701, Albania",
    hours: "Mon – Sun · 12:00 – 23:30",
    phone: "+355 52 222 134",
    mapQuery: "Balbi 34 Sarandë Albania",
    about:
      "Inspired by the street & civic number of the student building in Genova where we all have met, Balbi 34 restaurant has an absolute dedication to fresh, seasonal, sustainable ingredients and attention to detail & generosity.",
    menu: [
      {
        title: "Brunch · 09:00 – 14:00",
        items: [
          { name: "Egg Benedict", description: "Guacamole, poached eggs, smoked salmon, hollandaise sauce", price: "850 L" },
          { name: "Scrambled Egg Tacos", description: "Tacos, scrambled eggs, avocado, pico de gallo, dressing, mix salad", price: "790 L" },
          { name: "Granola Yogurt Bowl", description: "Yogurt, oats and seeds, dry fruits, fresh fruits, honey", price: "590 L" },
          { name: "Shakshuka", description: "Tomato and pepper sauce, eggs, pita bread", price: "650 L" },
          { name: "Avocado, Egg & Bacon Toast", description: "Toasted bread, mashed avocado, boiled eggs, bacon, dressing, mix salad, cherry tomatoes", price: "790 L" },
          { name: "Egg Muffin", description: "3 egg muffin, parma ham, parmesan cheese, mix salad", price: "750 L" },
          { name: "Pancakes", description: "Blueberries, strawberries, banana, maple syrup", price: "600 L" },
          { name: "Fruit Salad", description: "Mix of fresh seasonal fruits", price: "500 L" },
          { name: "Brunch Board", description: "Mix of sweet and savory selection on a large wooden platter", price: "1800 L" },
        ],
      },
      {
        title: "Cold Appetizers",
        items: [
          { name: "Marinated Anchovies & Burrata", description: "Marinated anchovies served with creamy burrata", price: "800 L" },
          { name: "Salmon Tartare", description: "Hand-cut fresh salmon, citrus and olive oil", price: "900 L" },
          { name: "White Fish Carpaccio", description: "Thinly sliced raw white fish, lemon and olive oil", price: "800 L" },
          { name: "Beef Tartare & Gorgonzola Cream", description: "Hand-cut beef tartare with gorgonzola cream", price: "850 L" },
          { name: "Fresh Seafood Appetizer (x2)", description: "Cold seafood platter to share", price: "3200 L" },
          { name: "Italian Cold Cuts & Cheeses (x2)", description: "Selection of Italian cured meats and cheeses", price: "1400 L" },
          { name: "Marinated Anchovies & Burrata", description: "Marinated anchovies served with creamy burrata", price: "800 L" },
          { name: "Salmon Tartare", description: "Hand-cut fresh salmon, citrus and olive oil", price: "900 L" },
          { name: "White Fish Carpaccio", description: "Thinly sliced raw white fish, lemon and olive oil", price: "800 L" },
          { name: "Beef Tartare & Gorgonzola Cream", description: "Hand-cut beef tartare with gorgonzola cream", price: "850 L" },
          { name: "Fresh Seafood Appetizer (x2)", description: "Cold seafood platter to share", price: "3200 L" },
          { name: "Italian Cold Cuts & Cheeses (x2)", description: "Selection of Italian cured meats and cheeses", price: "1400 L" },
        ],
      },
      {
        title: "Hot Appetizers",
        items: [
          { name: "Baked Homemade White Cheese", description: "Baked homemade white cheese", price: "500 L" },
          { name: "Kaçkavall Cheese & Sesame", description: "Kaçkavall cheese baked with sesame", price: "600 L" },
          { name: "Eggplant Parmigiana", description: "Layered baked eggplant with tomato and parmesan", price: "750 L" },
          { name: "Shrimps in Mediterranean Sauce", description: "Shrimps in a Mediterranean tomato and herb sauce", price: "800 L" },
          { name: "Fried Mozzarella di Bufala", description: "Crispy fried buffalo mozzarella", price: "800 L" },
        ],
      },
      {
        title: "Salads",
        items: [
          { name: "Village Salad", description: "Village salad with tomato, cucumber, onion and feta", price: "600 L" },
          { name: "Octopus & Potatoes", description: "Tender octopus with warm potatoes and olive oil", price: "950 L" },
          { name: "Grilled Vegetables", description: "Chargrilled seasonal vegetables", price: "700 L" },
          { name: "Balbi Salad", description: "House salad with mixed greens and seasonal toppings", price: "750 L" },
          { name: "Caprese & Parma Ham", description: "Buffalo mozzarella, tomato and parma ham", price: "900 L" },
        ],
      },
      {
        title: "Fresh Homemade Pasta",
        items: [
          { name: "Crab Meat Ravioli, Balbi Sauce", description: "Crab-filled ravioli in Balbi cream sauce", price: "1200 L" },
          { name: "Tagliatelle, Pork Cheek & Black Truffle", description: "Tagliatelle with pork cheek and black truffle", price: "1100 L" },
          { name: "Fagottini al Nero di Seppia, Shrimp Tartare", description: "Squid ink fagottini with shrimp tartare", price: "1400 L" },
          { name: "Paccheri with Seabass Ragù", description: "Paccheri pasta with slow-cooked seabass ragù", price: "1100 L" },
          { name: "Seafood Guitar Spaghetti", description: "Guitar-cut spaghetti with mixed seafood", price: "1000 L" },
          { name: "Gnocchi, Cherry Tomatoes & Burrata", description: "Gnocchi with cherry tomatoes and burrata", price: "850 L" },
          { name: "Risotto, Shrimps & Lemon", description: "Creamy risotto with shrimps and lemon", price: "1000 L" },
        ],
      },
      {
        title: "Main Dishes",
        items: [
          { name: "Beef Entrecote, Grana & Black Truffle", description: "Sliced beef entrecote with grana and black truffle", price: "1700 L" },
          { name: "Pepe Verde Beef Fillet", description: "Beef fillet in green peppercorn sauce", price: "1900 L" },
          { name: "Grilled Octopus & Potato Cream", description: "Chargrilled octopus on potato cream", price: "1400 L" },
          { name: "Fresh Tuna Tataki, Teriyaki Sauce", description: "Seared fresh tuna tataki with teriyaki sauce", price: "1500 L" },
          { name: "Seafood Saganaki", description: "Mediterranean seafood saganaki", price: "1300 L" },
          { name: "Crispy Salmon Fillet & Steamed Vegetables", description: "Crispy salmon fillet with steamed vegetables", price: "1600 L" },
          { name: "Grilled Seabream & Vegetables", description: "Grilled seabream with seasonal vegetables", price: "1500 L" },
          { name: "Grilled Seafood Mix (x2)", description: "Mixed grilled seafood platter to share", price: "3000 L" },
        ],
      },
      {
        title: "Dessert",
        items: [
          { name: "Trileçe", description: "Albanian milk cake soaked in three milks", price: "400 L" },
          { name: "Tiramisù", description: "Classic Italian tiramisù", price: "500 L" },
          { name: "Cheesecake", description: "House cheesecake", price: "600 L" },
        ],
      },
      {
        title: "Drinks & Beer",
        items: [
          { name: "Water 0.75 L", description: "Still or sparkling water", price: "250 L" },
          { name: "Soft Drinks", description: "Assorted soft drinks", price: "250 L" },
          { name: "Espresso", description: "Italian espresso", price: "100 L" },
          { name: "Amaro", description: "Italian amaro", price: "400 L" },
          { name: "Raki", description: "Traditional Albanian grape raki", price: "100 L" },
          { name: "Korça / Iliria 330 ml", description: "Albanian lager", price: "300 L" },
          { name: "Budweiser 330 ml", description: "Lager beer", price: "350 L" },
          { name: "Corona 330 ml", description: "Lager beer", price: "400 L" },
          { name: "Kaiser Lager / Weis 500 ml", description: "German wheat / lager beer", price: "500 L" },
        ],
      },
      {
        title: "Wine — Highlights",
        items: [
          { name: "Wine by the Glass", description: "House wine by the glass", price: "300 L" },
          { name: "Kavaljon White / Red", description: "Local Kavaljon white or red wine", price: "1800 L" },
          { name: "Pinot Grigio (Veneto, Italy)", description: "White", price: "2100 L" },
          { name: "Chardonnay Trevenezie (Italy)", description: "White", price: "2400 L" },
          { name: "Prosecco DOC (Veneto, Italy)", description: "Sparkling", price: "2500 L" },
          { name: "Montepulciano d'Abruzzo (Italy)", description: "Red", price: "2500 L" },
          { name: "Chianti Classico (Toscana, Italy)", description: "Red", price: "3400 L" },
          { name: "Amarone (Veneto, Italy)", description: "Red", price: "7000 L" },
          { name: "Full wine list", description: "See the downloadable PDF menu for the complete selection", price: "—" },
        ],
      },
    ],
    instagram: "https://www.instagram.com/villabalbi34",
    whatsapp: "https://wa.me/355677108161",
    menuPdf: balbi34MenuPdf.url,
  },
  {
    id: "balbi-35",
    name: "Balbi 35",
    city: "SARANDË",
    tagline: "Gourmet pizza from Via Balbi, baked with coastal warmth.",
    image: balbi35Img,
    hero: balbi35Hero,
    href: "/r/balbi-35",
    address: "Rruga Jonianët 35, Sarandë 9701, Albania",
    hours: "Mon – Sun · 13:00 – 00:00",
    phone: "+355 85 226 135",
    mapQuery: "Balbi 35 Sarande Albania",
    about:
      "Inspired by the university street where we all met — Via Balbi in Genoa, Italy. Pizzeria Balbi 35 is absolutely committed to fresh, seasonal ingredients, attention to detail and hospitality. After the success of Balbi 34 in the coastal city of Sarandë, Balbi 35 brings an exclusive and innovative product to the Albanian market: Pizza Gourmet.",
    menu: [
      {
        title: "Classic Pizza · 48h fermentation",
        items: [
          { name: "Margherita", description: "Tomato sauce, mozzarella, basil", price: "750 L" },
          { name: "Diavola", description: "Tomato sauce, mozzarella, spicy salami", price: "900 L" },
          { name: "Cotto e Funghi", description: "Tomato sauce, mozzarella, cotto ham, mushrooms", price: "900 L" },
          { name: "Portofino", description: "Tomato, mozzarella, pesto genovese, basil, cherry tomatoes", price: "850 L" },
          { name: "4 Formaggi", description: "Mozzarella, gorgonzola, grana, bufala", price: "850 L" },
          { name: "Amatriciana", description: "Tomato, mozzarella, bacon, red onion, cherry tomatoes, pecorino, pepper", price: "950 L" },
          { name: "Capricciosa", description: "Tomato, mozzarella, cotto ham, mushrooms, olives, artichoke", price: "950 L" },
          { name: "Crudo", description: "Tomato, mozzarella, rocket, grana, parma ham", price: "1200 L" },
        ],
      },
      {
        title: "Pizza Gourmet · 72h fermentation, served in 6 slices",
        items: [
          { name: "Bella Vita", description: "Tomato, marinated olive oil, anchovies, burrata, olives, basil", price: "1200 L" },
          { name: "Regina", description: "Tomato, bufala, dry tomatoes, basil", price: "1000 L" },
          { name: "Mortadella", description: "Mozzarella, mortadella, pistachio cream, burrata", price: "1400 L" },
          { name: "Balbi", description: "Ricotta-filled crust, zucchini cream, mozzarella, rocket, parma ham, burrata, pesto", price: "1800 L" },
          { name: "Bresaola & Truffle", description: "Truffle cream, mozzarella, bresaola, rocket, grana, cherry tomatoes", price: "1600 L" },
          { name: "Lucifero", description: "Tomato, mozzarella, nduja, spicy salami, ricotta, dry tomatoes, cayenne", price: "1300 L" },
          { name: "Gambero", description: "Zucchini cream, raw shrimps, burrata, pistachio, candied orange", price: "1800 L" },
          { name: "Tuna Tataki", description: "Tomato, bufala, fresh tuna tataki, caramelized onion, teriyaki", price: "1500 L" },
        ],
      },
      {
        title: "Appetizers",
        items: [
          { name: "Burrata, Cherry Tomato & Pesto Cream", description: "Burrata with cherry tomatoes and pesto cream", price: "750 L" },
          { name: "Octopus Carpaccio", description: "Thinly sliced octopus carpaccio", price: "850 L" },
          { name: "Shrimps in Kataifi, Guacamole & Pistachio", description: "Crispy kataifi shrimps with guacamole and pistachio", price: "900 L" },
          { name: "Marinated Anchovies", description: "Marinated anchovies in olive oil", price: "600 L" },
          { name: "Beef Carpaccio", description: "Beef carpaccio with rocket and parmesan", price: "950 L" },
          { name: "Baked Homemade Feta", description: "Baked homemade white cheese", price: "550 L" },
          { name: "Salmon Gravlax", description: "House-cured salmon gravlax", price: "800 L" },
          { name: "Tris Tartare (Salmon, Seabass, Tuna)", description: "Trio of tartare: salmon, seabass and tuna", price: "1600 L" },
          { name: "Fresh Seafood Appetizer (x2)", description: "Cold seafood platter to share", price: "3200 L" },
        ],
      },
      {
        title: "Salads",
        items: [
          { name: "Greek Salad", description: "Village salad with tomato, cucumber, onion and feta", price: "650 L" },
          { name: "Cold Seafood Salad", description: "Cold seafood salad with citrus dressing", price: "1200 L" },
          { name: "Caprese with Parma Ham", description: "Caprese with parma ham", price: "800 L" },
          { name: "Shrimps, Salmon & Orange Salad", description: "Salad with shrimps, salmon and orange", price: "950 L" },
        ],
      },
      {
        title: "Fresh Pasta & Risotto",
        items: [
          { name: "Crabmeat Ravioli, Balbi Sauce", description: "Crabmeat ravioli in Balbi sauce", price: "1200 L" },
          { name: "Gnocchi, Cherry Tomatoes & Burrata", description: "Gnocchi with cherry tomatoes and burrata", price: "850 L" },
          { name: "Paccheri with Salmon, Vodka & Lemon", description: "Paccheri with salmon, vodka and lemon", price: "1100 L" },
          { name: "Seafood Spaghetti", description: "Spaghetti with mixed seafood", price: "950 L" },
          { name: "Risotto, Zucchini Cream, Seabass & Black Truffle", description: "Risotto with zucchini cream, seabass and black truffle", price: "950 L" },
        ],
      },
      {
        title: "Mains",
        items: [
          { name: "Grilled Octopus & Potato Cream", description: "Chargrilled octopus on potato cream", price: "1500 L" },
          { name: "Salmon Fillet with Vegetables", description: "Salmon fillet with seasonal vegetables", price: "1600 L" },
          { name: "Grilled Seabass with Vegetables", description: "Whole grilled seabass with vegetables", price: "1400 L" },
          { name: "Fresh Tuna Tataki, Teriyaki", description: "Seared fresh tuna tataki with teriyaki sauce", price: "1500 L" },
          { name: "Beef Fillet, Demi-Glace & Baby Potatoes", description: "Beef fillet with demi-glace and baby potatoes", price: "1900 L" },
          { name: "Beef Entrecote, Gorgonzola Cream & Walnuts", description: "Sliced beef entrecote with gorgonzola cream and walnuts", price: "1700 L" },
          { name: "Fried Seafood", description: "Crispy fried mixed seafood", price: "1600 L" },
          { name: "Grilled Seafood Mix (x2)", description: "Mixed grilled seafood platter to share", price: "3000 L" },
        ],
      },
      {
        title: "Burgers",
        items: [
          { name: "Classic Burger", description: "Hamburger, lettuce, tomato, pickles, cheddar, bacon, potato dippers", price: "850 L" },
          { name: "Italian Burger", description: "Hamburger, gorgonzola cream, pecorino, dry tomatoes, caramelized onions, potato dippers", price: "900 L" },
          { name: "Chicken Burger", description: "House chicken cutlet, caesar sauce, lettuce, tomato, cheddar, potato dippers", price: "800 L" },
        ],
      },
      {
        title: "Drinks & Beer",
        items: [
          { name: "Water 0.75 L", description: "Still or sparkling water", price: "250 L" },
          { name: "Soft Drinks", description: "Assorted soft drinks", price: "250 L" },
          { name: "Espresso", description: "Italian espresso", price: "100 L" },
          { name: "Amaro", description: "Italian amaro", price: "400 L" },
          { name: "Raki", description: "Traditional Albanian grape raki", price: "100 L" },
          { name: "Iliria Draft Small / Medium", description: "Local draft", price: "200 / 350 L" },
          { name: "Iliria 330 ml", description: "Lager beer", price: "300 L" },
          { name: "Peroni / Peroni Gran Riserva 330 ml", description: "Italian lager", price: "350 L" },
          { name: "Corona 330 ml", description: "Lager beer", price: "400 L" },
          { name: "Franziskaner Weis 500 ml", description: "Wheat beer", price: "500 L" },
        ],
      },
      {
        title: "Wine — Highlights",
        items: [
          { name: "Wine by the Glass", description: "House wine by the glass", price: "300 L" },
          { name: "Kavaljon White / Red", description: "Local Kavaljon white or red wine", price: "1800 L" },
          { name: "Pinot Grigio (Veneto, Italy)", description: "White", price: "2100 L" },
          { name: "Prosecco DOC (Veneto, Italy)", description: "Sparkling", price: "2500 L" },
          { name: "Greco di Tufo (Campania, Italy)", description: "White", price: "3200 L" },
          { name: "Montepulciano d'Abruzzo (Italy)", description: "Red", price: "2500 L" },
          { name: "Chianti Classico (Toscana, Italy)", description: "Red", price: "3400 L" },
          { name: "Amarone (Veneto, Italy)", description: "Red", price: "7000 L" },
          { name: "Full wine list", description: "See the downloadable PDF menu for the complete selection", price: "—" },
        ],
      },
    ],
    instagram: "https://www.instagram.com/balbi.35",
    whatsapp: "https://wa.me/355677108161",
    menuPdf: balbi35MenuPdf.url,
  },
];
