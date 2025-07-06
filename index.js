// Prego Food & Beverage Manual API - Railway Deployment
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Complete Prego Manual Knowledge Base
const pregoManual = {
  "manual_name": "Prego Food and Beverage Knowledge Product Guide",
  "version": "1.0 (2024-09-20)",
  "sections": [
    {
      "section_id": "geography_regions",
      "title": "Italian Geography and Regional Overview",
      "content": [
        {
          "topic": "northern_italy",
          "text": "Northern Italian food tends to be heartier, reflecting colder climate. Uses eggs, butter, cow's milk, cheese. Pasta and gelato richer due to egg yolks.",
          "regions": ["Liguria", "Lombardy", "Piemonte", "Veneto", "Tuscany", "Emilia-Romagna"],
          "specialties": ["Pesto", "Risotto alla Milanese", "White Truffles", "Parmigiano Reggiano", "Prosciutto di Parma"]
        },
        {
          "topic": "southern_italy",
          "text": "Southern cuisine traditionally simpler, using semolina flour and water for pasta. Warmer region producing flavorful tomatoes, eggplants. More spicy due to chilies.",
          "regions": ["Lazio", "Campania", "Puglia", "Calabria", "Sicily"],
          "specialties": ["Roman pasta dishes", "Mozzarella di Bufala", "San Marzano tomatoes", "Burrata", "Cannoli"]
        }
      ]
    },
    {
      "section_id": "ingredients_knowledge",
      "title": "Key Ingredient Knowledge",
      "content": [
        {
          "topic": "balsamic_vinegar",
          "text": "Traditional balsamic vinegar from Modena/Reggio Emilia, aged minimum 12 years in wooden barrels. Commercial grade uses 20% grape must with wine vinegar.",
          "usage": "Traditional: sparingly over Parmesan, mortadella. Commercial: salad dressing, balsamic glaze",
          "quality_grades": ["DOP Traditional", "IGP Commercial"]
        },
        {
          "topic": "olive_oil",
          "text": "Key ingredient of Italian cuisine. Extra virgin highest grade (0.8% acidity), cold mechanical extraction. Spain largest producer, Italy second.",
          "grades": ["Extra Virgin", "Virgin", "Refined", "Pomace"],
          "usage": "Cooking oil, salad dressing, bread dipping"
        },
        {
          "topic": "san_marzano_tomatoes",
          "text": "Plum tomatoes from Campania region, volcanic soil of Mount Vesuvius. Thicker flesh, fewer seeds, stronger sweeter flavor, less acidic. DOP protected.",
          "characteristics": ["Thick flesh", "Few seeds", "Sweet flavor", "Low acidity"],
          "usage": "Essential for tomato sauces, pasta, pizza. Only 2 types allowed for Neapolitan pizza"
        },
        {
          "topic": "truffles",
          "text": "Edible fungus growing underground near tree roots. Italy has black and white truffles. White truffles from Alba, Piedmont are most prized. Harvested by trained dogs.",
          "types": ["Black Italian truffles", "White Italian truffles (Alba)"],
          "regions": ["Piedmont", "Tuscany", "Emilia Romagna", "Abruzzo", "Molise"],
          "usage": "Truffle risotto, pasta, mashed potatoes, pizza garnish"
        },
        {
          "topic": "pesto",
          "text": "Paste made of crushed garlic, pine nuts, basil leaves, olive oil, finished with grated cheese. Originated from Genoa. Name from Genoese verb pestâ meaning 'to pound'.",
          "ingredients": ["Garlic", "Pine nuts", "Basil", "Olive oil", "Parmesan/Grana Padano"],
          "origin": "Genoa, Liguria",
          "usage": "Pasta sauce, minestrone soup, potatoes, string beans"
        }
      ]
    },
    {
      "section_id": "salumi_knowledge",
      "title": "Italian Cured Meats (Salumi)",
      "content": [
        {
          "topic": "prosciutto_crudo",
          "text": "Italian dry-cured ham from pig's hind leg. Prosciutto di Parma (nutty flavor from Parmesan whey diet) and San Daniele (darker, sweeter). 9 months to 2 years aging.",
          "types": ["Prosciutto di Parma DOP", "Prosciutto di San Daniele DOP"],
          "preparation": "Salt cured, no additives allowed for DOP",
          "serving": "Thin slices with melon, antipasti, cooking ingredient"
        },
        {
          "topic": "mortadella",
          "text": "Large cylindrical salume, finely ground cured pork with 15% pork fat cubes. Flavored with peppercorns or pistachios. Mortadella Bologna has PGI status.",
          "characteristics": ["15% fat cubes", "Cooked emulsion sausage", "Peppercorns or pistachios"],
          "origin": "Bologna, Emilia-Romagna"
        },
        {
          "topic": "guanciale",
          "text": "Italian salt-cured pork jowl from cheek. Cured 3 weeks, loses 30% weight. Stronger flavor than pancetta, more delicate texture. Used in Carbonara and Amatriciana.",
          "characteristics": ["Made from pork jowl", "3 week curing", "High fat content"],
          "usage": "Roman pasta dishes: Carbonara, Amatriciana"
        },
        {
          "topic": "pancetta",
          "text": "Salt-cured pork belly, typically used for cooking. Adds depth to soups and pastas. Two types: arrotolata (rolled) and stesa (flat).",
          "types": ["Arrotolata (rolled)", "Stesa (flat)"],
          "usage": "Cooking ingredient, pasta carbonara substitute for guanciale"
        }
      ]
    },
    {
      "section_id": "cheese_knowledge",
      "title": "Italian Cheeses",
      "content": [
        {
          "topic": "parmigiano_reggiano",
          "text": "King of Italian cheeses from Emilia-Romagna. Aged minimum 12 months, often 24-36 months. Made from cow's milk, only salt and rennet added.",
          "aging": ["12 months minimum", "24-36 months optimal"],
          "region": "Emilia-Romagna",
          "usage": "Grating, cooking, eating with balsamic vinegar"
        },
        {
          "topic": "mozzarella_types",
          "text": "Mozzarella di Bufala (buffalo milk) from Campania. Fior di Latte (cow's milk version). Fresh, soft texture.",
          "types": ["Mozzarella di Bufala", "Fior di Latte"],
          "characteristics": "Fresh, soft, milky flavor",
          "usage": "Caprese salad, pizza, antipasti"
        },
        {
          "topic": "burrata",
          "text": "Italian cow's milk cheese made from mozzarella and cream. Outer mozzarella casing with soft creamy filling of stracciatella and clotted cream. From Puglia.",
          "characteristics": ["Mozzarella outer casing", "Creamy stracciatella filling"],
          "origin": "Puglia, Southern Italy",
          "usage": "Appetizer, pasta topping, pizza topping"
        },
        {
          "topic": "gorgonzola",
          "text": "Italian blue cheese made from cow's milk. Creamy texture with blue-green veins. Two types: dolce (mild, creamy) and piccante (stronger, firmer).",
          "types": ["Gorgonzola dolce", "Gorgonzola piccante"],
          "characteristics": "Blue veins, creamy texture",
          "usage": "Pasta sauces, pizza, risotto"
        }
      ]
    },
    {
      "section_id": "pasta_knowledge",
      "title": "Pasta Categories and Preparation",
      "content": [
        {
          "topic": "pasta_types",
          "text": "Fresh pasta made with eggs, flour, water/olive oil. Dried pasta uses semolina flour and water. For egg-sensitive customers, recommend dried pasta.",
          "categories": ["Pasta Asciutta (with sauce)", "Pasta in Brodo (in broth)", "Pasta al Forno (baked)"],
          "shapes": ["Linguine", "Ravioli", "Spaghetti", "Fettuccine", "Tagliatelle", "Penne", "Pappardelle"],
          "allergen_note": "Fresh pasta contains eggs - recommend dried pasta for egg allergies"
        },
        {
          "topic": "famous_roman_pastas",
          "text": "4 iconic Roman pasta dishes from Lazio region: Carbonara, Cacio e Pepe, Amatriciana, alla Gricia. All use Pecorino Romano cheese.",
          "dishes": [
            "Carbonara (guanciale, pecorino, egg yolks, pepper)",
            "Cacio e Pepe (pecorino, pepper)",
            "Amatriciana (guanciale, tomato, pecorino)",
            "alla Gricia (guanciale, pecorino)"
          ],
          "key_ingredient": "Pecorino Romano cheese",
          "region": "Lazio (Rome)"
        },
        {
          "topic": "bolognese_sauce",
          "text": "Famous pasta sauce from Bologna. Contains minced beef, fatty pork, onion, celery, carrot, white wine, milk, tomato paste. Only eaten with tagliatelle or in lasagna in Italy.",
          "ingredients": ["Minced beef", "Fatty pork/pancetta", "Onion", "Celery", "Carrot", "White wine", "Milk", "Tomato paste"],
          "traditional_pairing": "Tagliatelle, not spaghetti",
          "origin": "Bologna, Emilia-Romagna"
        }
      ]
    },
    {
      "section_id": "wine_knowledge",
      "title": "Italian Wine Classification and Pairing",
      "content": [
        {
          "topic": "wine_classification",
          "text": "4-tier system: Vini da Tavola (table wine), IGT, DOC, DOCG (highest). Italy produces 20% of global wine, trades with France for #1 rank.",
          "tiers": ["Vini da Tavola", "IGT", "DOC", "DOCG"],
          "famous_wines": ["Barolo", "Barbaresco", "Brunello di Montalcino", "Chianti", "Amarone", "Super Tuscans"]
        },
        {
          "topic": "wine_pairing_basics",
          "text": "White wines/Prosecco with appetizers, seafood, risotto. Red wines with pizza, meat pastas, beef/lamb mains. Pinot Grigio versatile with pizza.",
          "white_pairings": ["Appetizers", "Seafood", "Risotto", "White sauce pastas"],
          "red_pairings": ["Pizza", "Meat ragus", "Beef", "Lamb"],
          "prosecco_pairings": ["Appetizers", "Light dishes", "Cocktail base"]
        },
        {
          "topic": "prosecco",
          "text": "Italian sparkling wine from Veneto and Friuli-Venezia Giulia. Made primarily from Glera grapes. Affordable, casual drinking. Charmat-Martinotti method.",
          "production_method": "Charmat-Martinotti (tank fermentation)",
          "grape": "Glera (formerly Prosecco)",
          "regions": ["Veneto", "Friuli-Venezia Giulia"],
          "cocktails": ["Rossini", "Kir Royale", "Bellini", "Mimosa"]
        }
      ]
    },
    {
      "section_id": "beverages_knowledge",
      "title": "Italian Beverages and Coffee Culture",
      "content": [
        {
          "topic": "aperitivo_culture",
          "text": "Evening ritual from 1700s. Pre-dinner drinks to stimulate appetite. Aperol Spritz, Negroni, Bellini popular. Apericena is more substantial with buffet.",
          "drinks": ["Aperol Spritz", "Negroni", "Bellini", "Prosecco"],
          "timing": "Between work end and dinner (around 6-8pm)",
          "food": "Cicchetti, olives, nuts, small bites"
        },
        {
          "topic": "espresso_preparation",
          "text": "Espresso uses 9 bars pressure, 92-96°C water temperature. Creates concentrated shot with crema foam. Name from 'esprimere' meaning to press out.",
          "technical": ["9 bars pressure", "92-96°C water", "Fine grounds", "Creates crema"],
          "serving": "Pure form of coffee, quick extraction without burning"
        },
        {
          "topic": "digestifs",
          "text": "After-dinner drinks to aid digestion. Grappa (grape pomace brandy), Amaro (herbal liqueurs), Limoncello (lemon liqueur) from Southern Italy.",
          "types": ["Grappa", "Amaro Montenegro", "Fernet-Branca", "Limoncello", "Amaretto"],
          "serving": "Neat, at end of meal, aid digestion"
        },
        {
          "topic": "amaro_types",
          "text": "Italian herbal liqueurs for digestion. Montenegro (40 botanicals), Averna (Sicilian), Fernet-Branca (27 herbs), Cynar (artichoke-based).",
          "varieties": ["Montenegro", "Averna", "Fernet-Branca", "Cynar"],
          "characteristics": "Bitter-sweet, herbal, digestive properties"
        }
      ]
    },
    {
      "section_id": "pizza_knowledge",
      "title": "Pizza Styles and Preparation",
      "content": [
        {
          "topic": "pizza_styles",
          "text": "Roman style: thin crispy base with oil in dough. Neapolitan style: thicker fluffy crust, soft and airy, wood-fired oven with blackened edges.",
          "roman_characteristics": ["Thin crispy base", "Oil in dough", "Crispier texture"],
          "neapolitan_characteristics": ["Thick fluffy crust", "Soft and airy", "Wood-fired", "Blackened edges"],
          "unesco_status": "Neapolitan Pizza is UNESCO intangible cultural heritage"
        },
        {
          "topic": "classic_pizzas",
          "text": "Margherita: tomato, mozzarella, basil (Italian flag colors). Marinara: tomato, garlic, oregano, olive oil. Capricciosa: ham, mushrooms, artichokes, olives.",
          "margherita": "Created 1889 for Queen Margherita, red-white-green colors",
          "traditional_toppings": ["Tomato sauce", "Mozzarella", "Fresh basil", "Olive oil"]
        }
      ]
    }
  ]
};

// Create search index for better performance
function createSearchIndex(manual) {
  const index = new Map();
  
  manual.sections.forEach(section => {
    section.content.forEach(item => {
      const keywords = [
        item.topic,
        ...(item.regions || []),
        ...(item.specialties || []),
        ...(item.types || []),
        ...(item.dishes || []),
        ...(item.characteristics || []),
        ...(item.ingredients || []),
        ...(item.white_pairings || []),
        ...(item.red_pairings || [])
      ].filter(Boolean);
      
      // Add text words as keywords
      const textWords = item.text.toLowerCase().split(/\s+/).filter(word => word.length > 3);
      keywords.push(...textWords);
      
      keywords.forEach(keyword => {
        const key = keyword.toLowerCase();
        if (!index.has(key)) {
          index.set(key, []);
        }
        index.get(key).push({
          section: section.section_id,
          title: section.title,
          topic: item.topic,
          content: item
        });
      });
    });
  });
  
  return index;
}

const searchIndex = createSearchIndex(pregoManual);

// API Routes

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Prego Food & Beverage Knowledge API',
    system: 'Prego Overseer',
    version: pregoManual.version,
    endpoints: [
      'GET /api/prego-manual - Get complete manual',
      'GET /api/prego-manual/search?q=query&section=optional - Search manual content',
      'GET /api/prego-manual/section/:sectionId - Get specific section',
      'GET /api/prego-manual/topic/:topic - Get topic information',
      'GET /api/prego-manual/wine-pairing?dish=name - Wine pairing suggestions',
      'GET /health - Health check'
    ],
    available_sections: pregoManual.sections.map(s => ({ 
      id: s.section_id, 
      title: s.title,
      topics: s.content.length 
    })),
    total_topics: pregoManual.sections.reduce((sum, section) => sum + section.content.length, 0)
  });
});

// Get complete manual
app.get('/api/prego-manual', (req, res) => {
  res.json(pregoManual);
});

// Search manual content
app.get('/api/prego-manual/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const section = req.query.section || '';
  
  if (!query) {
    return res.json({
      query: '',
      results: [],
      total: 0,
      suggestion: 'Try searching for: pasta, wine, cheese, pizza, ingredients, regions'
    });
  }
  
  const results = new Set();
  const queryWords = query.split(/\s+/).filter(word => word.length > 2);
  
  queryWords.forEach(word => {
    if (searchIndex.has(word)) {
      searchIndex.get(word).forEach(result => {
        if (!section || result.section === section) {
          results.add(JSON.stringify(result));
        }
      });
    }
  });
  
  const finalResults = Array.from(results).map(r => JSON.parse(r));
  
  res.json({
    query: query,
    results: finalResults,
    total: finalResults.length,
    sections_found: [...new Set(finalResults.map(r => r.section))]
  });
});

// Get specific section
app.get('/api/prego-manual/section/:sectionId', (req, res) => {
  const section = pregoManual.sections.find(s => s.section_id === req.params.sectionId);
  if (!section) {
    return res.status(404).json({ 
      error: 'Section not found',
      available_sections: pregoManual.sections.map(s => s.section_id)
    });
  }
  res.json(section);
});

// Get topic information
app.get('/api/prego-manual/topic/:topic', (req, res) => {
  const topic = req.params.topic.toLowerCase();
  const results = [];
  
  pregoManual.sections.forEach(section => {
    section.content.forEach(item => {
      if (item.topic.toLowerCase().includes(topic)) {
        results.push({
          section: section.section_id,
          title: section.title,
          topic: item.topic,
          content: item
        });
      }
    });
  });
  
  if (results.length === 0) {
    return res.status(404).json({ 
      error: 'Topic not found',
      suggestion: 'Try: pasta, wine, cheese, pizza, truffles, prosciutto'
    });
  }
  
  res.json({
    topic: req.params.topic,
    results: results,
    total: results.length
  });
});

// Wine pairing endpoint
app.get('/api/prego-manual/wine-pairing', (req, res) => {
  const dish = req.query.dish?.toLowerCase() || '';
  
  const wineSection = pregoManual.sections.find(s => s.section_id === 'wine_knowledge');
  const pairingInfo = wineSection.content.find(c => c.topic === 'wine_pairing_basics');
  
  let recommendations = [];
  let reasoning = '';
  
  // Enhanced pairing logic
  const whitePairings = ['seafood', 'fish', 'risotto', 'appetizer', 'salad', 'soup', 'cream', 'white sauce'];
  const redPairings = ['beef', 'lamb', 'pizza', 'meat', 'tomato', 'ragout', 'bolognese'];
  const proseccoPairings = ['light', 'fresh', 'starter', 'aperitif'];
  
  if (whitePairings.some(w => dish.includes(w))) {
    recommendations = ['Pinot Grigio', 'Prosecco', 'Chardonnay', 'Sauvignon Blanc'];
    reasoning = 'White wines complement seafood, cream sauces, and light dishes with their acidity and freshness.';
  } else if (redPairings.some(r => dish.includes(r))) {
    recommendations = ['Chianti', 'Merlot', 'Cabernet Sauvignon', 'Pinot Noir'];
    reasoning = 'Red wines pair well with meat dishes, tomato-based sauces, and rich flavors.';
  } else if (proseccoPairings.some(p => dish.includes(p))) {
    recommendations = ['Prosecco', 'Aperol Spritz', 'Bellini'];
    reasoning = 'Sparkling wines are perfect for light dishes and as aperitifs.';
  } else {
    recommendations = ['Prosecco (versatile)', 'Pinot Grigio (safe choice)'];
    reasoning = 'These wines are versatile and pair well with most Italian dishes.';
  }
  
  res.json({
    dish: dish,
    recommended_wines: recommendations,
    reasoning: reasoning,
    pairing_guidelines: pairingInfo
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    system: 'Prego Overseer',
    manual: pregoManual.manual_name,
    version: pregoManual.version,
    sections: pregoManual.sections.length,
    total_topics: pregoManual.sections.reduce((sum, section) => sum + section.content.length, 0),
    search_index_size: searchIndex.size,
    timestamp: new Date().toISOString() 
  });
});

app.listen(port, () => {
  console.log(`Prego Food & Beverage Knowledge API running on port ${port}`);
  console.log(`System: Prego Overseer`);
  console.log(`Manual: ${pregoManual.manual_name} v${pregoManual.version}`);
  console.log(`Sections: ${pregoManual.sections.length}`);
  console.log(`Total Topics: ${pregoManual.sections.reduce((sum, section) => sum + section.content.length, 0)}`);
  console.log(`Search Index: ${searchIndex.size} keywords`);
});

module.exports = app;
