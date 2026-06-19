// Translations for restaurant content (tagline, about, city) and menu
// section titles, keyed by the English source string for sections.

type RestContent = { tagline: string; about: string; city: string };
type RestMap = Record<string, RestContent>; // restaurant id -> content

// English city values match data; translations override.
const EN_BALBI_34: RestContent = {
  tagline: "Seasonal plates with Genovese roots by the sea.",
  about:
    "Inspired by the street & civic number of the student building in Genova where we all have met, Balbi 34 restaurant has an absolute dedication to fresh, seasonal, sustainable ingredients and attention to detail & generosity.",
  city: "SARANDË",
};
const EN_BALBI_35: RestContent = {
  tagline: "Gourmet pizza from Via Balbi, baked with coastal warmth.",
  about:
    "Inspired by the university street where we all met — Via Balbi in Genoa, Italy. Pizzeria Balbi 35 is absolutely committed to fresh, seasonal ingredients, attention to detail and hospitality. After the success of Balbi 34 in the coastal city of Sarandë, Balbi 35 brings an exclusive and innovative product to the Albanian market: Pizza Gourmet.",
  city: "SARANDË",
};

export const restaurantContent: Record<string, RestMap> = {
  en: { "balbi-34": EN_BALBI_34, "balbi-35": EN_BALBI_35 },
  sq: {
    "balbi-34": {
      tagline: "Pjata stinore me rrënjë Genovese buzë detit.",
      about: "Frymëzuar nga rruga dhe numri i ndërtesës së studenteve ku jemi takuar te gjithe, restoranti Balbi 34 ka një perkushtim absolut ndaj perberesve te fresket, sezonal, dhe vemendjes ndaj detajeve dhe mirepritjes.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Pica gustator nga Via Balbi, e pjekur me ngrohtësi bregdetare.",
      about: "Frymëzuar nga rruga e universiteteve ku jemi takuar të gjithë, Via Balbi në Genova të Italisë. Pizzeria Balbi 35 ka një përkushtim absolut ndaj përbërësve të freskët, sezonalë dhe vëmendjes ndaj detajeve dhe mikpritjes. Mbas suksesit të restorantit Balbi 34 në qytetin bregdetar të Sarandës, Balbi 35 vjen me një produkt ekskluziv dhe inovativ për tregun shqiptar: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  uk: {
    "balbi-34": {
      tagline: "Сезонні тарілки з дженовезьким корінням біля моря.",
      about: "Натхненна вулицею та номером будівлі університету в Генуї, де ми всі познайомилися, ресторан Balbi 34 має абсолютну відданість свіжим, сезонним, екологічним інгредієнтам та увазі до деталей і щедрості.",
      city: "САРАНДА",
    },
    "balbi-35": {
      tagline: "Піца для гурманів з Віа Бальбі, випечена в прибережному теплі.",
      about: "Натхненні університетською вулицею, де всі ми познайомилися — Via Balbi у Генуї, Італія. Pizzeria Balbi 35 цілком віддана свіжим сезонним інгредієнтам, увазі до деталей і гостинності. Після успіху Balbi 34 у прибережному місті Саранда, Balbi 35 пропонує албанському ринку ексклюзивний і новаторський продукт: Pizza Gourmet.",
      city: "САРАНДА",
    },
  },
  bg: {
    "balbi-34": {
      tagline: "Сезонни чинии с корени Дженовезе край морето.",
      about: "Вдъхновена от улицата и номера на студентската сграда в Генуа, където всички се запознахме, ресторант Balbi 34 има абсолютна отдаденост на пресни, сезонни, устойчиви съставки и внимание към детайлите и щедростта.",
      city: "САРАНДА",
    },
    "balbi-35": {
      tagline: "Гурме пица от Via Balbi, изпечена с крайбрежна топлина.",
      about: "Вдъхновени от университетската улица, където всички се срещнахме — Via Balbi в Генуа, Италия. Pizzeria Balbi 35 е напълно отдадена на свежите сезонни съставки, вниманието към детайла и гостоприемството. След успеха на Balbi 34 в крайбрежния град Саранда, Balbi 35 предлага на албанския пазар ексклузивен и иновативен продукт: Pizza Gourmet.",
      city: "САРАНДА",
    },
  },
  hr: {
    "balbi-34": {
      tagline: "Sezonski tanjuri genovskih korijena uz more.",
      about: "Inspirirana ulicom i brojem zgrade studenata u Genovi gdje smo se svi upoznali, restoran Balbi 34 ima apsolutnu posvećenost svježim, sezonskim, održivim sastojcima i pažnju prema detaljima i velikodušnosti.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Gurmanska pizza iz Via Balbi, pečena u primorskoj toplini.",
      about: "Inspirirani sveučilišnom ulicom gdje smo se svi upoznali — Via Balbi u Genovi, Italija. Pizzeria Balbi 35 potpuno je posvećena svježim sezonskim sastojcima, pažnji prema detaljima i gostoprimstvu. Nakon uspjeha Balbi 34 u priobalnom gradu Sarandi, Balbi 35 albanskom tržištu donosi ekskluzivan i inovativan proizvod: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  cs: {
    "balbi-34": {
      tagline: "Sezónní talíře s kořeny Genovese u moře.",
      about: "Inspirována ulicí a číslem studentské budovy v Janově, kde jsme se všichni setkali, restaurace Balbi 34 má absolutní oddanost čerstvým, sezónním, udržitelným ingrediencím a pozornost k detailům a velkorysosti.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Gurmánská pizza z Via Balbi, pečená s přímořským teplem.",
      about: "Inspirováno univerzitní ulicí, kde jsme se všichni potkali — Via Balbi v italském Janově. Pizzeria Balbi 35 je zcela oddaná čerstvým sezónním surovinám, pozornosti k detailu a pohostinnosti. Po úspěchu Balbi 34 v pobřežním městě Sarandě přináší Balbi 35 na albánský trh exkluzivní a inovativní produkt: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  da: {
    "balbi-34": {
      tagline: "Sæsonbestemte tallerkener med genovesiske rødder ved havet.",
      about: "Inspireret af gaden og nummeret på studenternes bygning i Genova, hvor vi alle mødtes, har restaurant Balbi 34 en absolut dedikation til friske, sæsonbestemte, bæredygtige ingredienser og opmærksomhed på detaljer og gavmildhed.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Gourmetpizza fra Via Balbi, bagt med kystvarme.",
      about: "Inspireret af universitetsgaden, hvor vi alle mødtes — Via Balbi i Genova, Italien. Pizzeria Balbi 35 er fuldt ud dedikeret til friske, sæsonbestemte råvarer, sans for detaljen og gæstfrihed. Efter succesen med Balbi 34 i kystbyen Sarandë bringer Balbi 35 et eksklusivt og innovativt produkt til det albanske marked: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  nl: {
    "balbi-34": {
      tagline: "Seizoensschotels met Genovese wortels aan zee.",
      about: "Geïnspireerd door de straat en het huisnummer van het studentengebouw in Genua waar we elkaar allemaal hebben ontmoet, heeft restaurant Balbi 34 een absolute toewijding aan verse, seizoensgebonden, duurzame ingrediënten en aandacht voor detail en vrijgevigheid.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Gastronomische pizza uit Via Balbi, gebakken met kustwarmte.",
      about: "Geïnspireerd door de universiteitsstraat waar wij elkaar allemaal ontmoetten — Via Balbi in Genua, Italië. Pizzeria Balbi 35 is volledig toegewijd aan verse, seizoensgebonden ingrediënten, oog voor detail en gastvrijheid. Na het succes van Balbi 34 in de kuststad Sarandë brengt Balbi 35 een exclusief en innovatief product naar de Albanese markt: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  et: {
    "balbi-34": {
      tagline: "Genovese juurtega hooajataldrikud mere ääres.",
      about: "Inspireeritud tänava ja Genova üliõpilastehoone numbriga, kus me kõik kohtusime, on restoranil Balbi 34 absoluutne pühendumus värsketele, hooajalistele, jätkusuutlikele koostisosadele ja tähelepanule detailidele ning heldusele.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Gurmeepitsa Via Balbilt, küpsetatud rannasoojusega.",
      about: "Inspireeritud ülikoolitänavast, kus me kõik kohtusime — Via Balbi Genovas, Itaalias. Pizzeria Balbi 35 on täielikult pühendunud värsketele hooajalistele koostisosadele, tähelepanule detailide vastu ja külalislahkusele. Pärast Balbi 34 edu rannikulinnas Sarandës toob Balbi 35 Albaania turule ainulaadse ja uuendusliku toote: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  fi: {
    "balbi-34": {
      tagline: "Genovesejuurilla kausilautasia meren rannalla.",
      about: "Innoitettuna Genovan opiskelijarakennuksen kadusta ja numerosta, jossa me kaikki tapasimme, ravintola Balbi 34 on ehdottoman omistautunut tuoreille, kausittaisille, kestäville raaka-aineille ja huomiolle yksityiskohtiin ja anteliaisuuteen.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Gourmet-pizza Via Balbilta, paistettu rannikon lämmöllä.",
      about: "Saanut inspiraationsa yliopistokadusta, jossa me kaikki tapasimme — Via Balbi Genovassa, Italiassa. Pizzeria Balbi 35 on täysin omistautunut tuoreille kausituotteille, yksityiskohtien huomioimiselle ja vieraanvaraisuudelle. Balbi 34:n menestyksen jälkeen rannikkokaupungissa Sarandëssa Balbi 35 tuo Albanian markkinoille ainutlaatuisen ja innovatiivisen tuotteen: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  fr: {
    "balbi-34": {
      tagline: "Assiettes de saison aux racines génoises en bord de mer.",
      about: "Inspiré par la rue et le numéro du bâtiment étudiant de Gênes où nous nous sommes tous rencontrés, le restaurant Balbi 34 a un dévouement absolu aux ingrédients frais, de saison et durables, ainsi qu'une attention aux détails et à la générosité.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Pizza gastronomique de la Via Balbi, cuite avec la chaleur de la côte.",
      about: "Inspirée par la rue universitaire où nous nous sommes tous rencontrés — la Via Balbi à Gênes, en Italie. La Pizzeria Balbi 35 est entièrement dévouée aux ingrédients frais et de saison, au souci du détail et à l'hospitalité. Après le succès de Balbi 34 dans la ville côtière de Sarandë, Balbi 35 propose au marché albanais un produit exclusif et innovant : la Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  de: {
    "balbi-34": {
      tagline: "Saisonale Teller mit genuesischen Wurzeln am Meer.",
      about: "Inspiriert von der Straße und der Hausnummer des Studentenwohnheims in Genua, wo wir uns alle getroffen haben, hat das Restaurant Balbi 34 eine absolute Hingabe an frische, saisonale, nachhaltige Zutaten und Aufmerksamkeit für Details und Großzügigkeit.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Gourmet-Pizza von Via Balbi, gebacken mit Küstenwärme.",
      about: "Inspiriert von der Universitätsstraße, in der wir uns alle kennengelernt haben — der Via Balbi in Genua, Italien. Die Pizzeria Balbi 35 widmet sich voll und ganz frischen, saisonalen Zutaten, der Liebe zum Detail und der Gastfreundschaft. Nach dem Erfolg von Balbi 34 in der Küstenstadt Sarandë bringt Balbi 35 ein exklusives und innovatives Produkt auf den albanischen Markt: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  el: {
    "balbi-34": {
      tagline: "Εποχιακά πιάτα με ρίζες Genovese δίπλα στη θάλασσα.",
      about: "Εμπνευσμένο από τον δρόμο και τον αριθμό του φοιτητικού κτιρίου στη Γένοβα όπου όλοι γνωριστήκαμε, το εστιατόριο Balbi 34 έχει απόλυτη αφοσίωση σε φρέσκα, εποχιακά, βιώσιμα υλικά και προσοχή στη λεπτομέρεια και τη γενναιοδωρία.",
      city: "ΣΑΡΑΝΤΑ",
    },
    "balbi-35": {
      tagline: "Γκουρμέ πίτσα από τη Via Balbi, ψημένη με παραθαλάσσια ζεστασιά.",
      about: "Εμπνευσμένο από τον πανεπιστημιακό δρόμο όπου γνωριστήκαμε όλοι — τη Via Balbi στη Γένοβα της Ιταλίας. Η Pizzeria Balbi 35 είναι απολύτως αφοσιωμένη σε φρέσκα, εποχικά υλικά, στην προσοχή στη λεπτομέρεια και στη φιλοξενία. Μετά την επιτυχία του Balbi 34 στην παραλιακή πόλη της Σαράντα, το Balbi 35 φέρνει στην αλβανική αγορά ένα αποκλειστικό και καινοτόμο προϊόν: Pizza Gourmet.",
      city: "ΣΑΡΑΝΤΑ",
    },
  },
  hu: {
    "balbi-34": {
      tagline: "Szezonális tányérok genovai gyökerekkel a tenger mellett.",
      about: "A genovai diákház utcája és száma ihlette, ahol mindannyian találkoztunk, a Balbi 34 étterem abszolút elkötelezettséget mutat a friss, szezonális, fenntartható alapanyagok iránt, és figyelmet fordít a részletekre és a nagylelkűségre.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Ínyenc pizza a Via Balbiról, tengerparti melegséggel sütve.",
      about: "Az egyetemi utca ihletésére, ahol mind találkoztunk — a Via Balbi az olaszországi Genovában. A Pizzeria Balbi 35 teljes mértékben elkötelezett a friss, szezonális alapanyagok, a részletek és a vendégszeretet iránt. A tengerparti Sarandë városában elért Balbi 34-siker után a Balbi 35 exkluzív és újító terméket hoz az albán piacra: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  ga: {
    "balbi-34": {
      tagline: "Plátaí séasúracha le fréamhacha Genovese cois na farraige.",
      about: "Spreagtha ag an sráid agus uimhir an fhoirgnimh mac léinn i nGenova ár dtuilleadh, tá tiomantas absalóideach ag bialann Balbi 34 d'comhábhair úra, séasúrtha, inbhuanaithe agus aird ar mhonrath agus ar fhlaithiúlacht.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Pizza gourmet ó Via Balbi, bácáilte le teas cósta.",
      about: "Spreagtha ag sráid na hollscoile inar bhuail muid go léir lena chéile — Via Balbi i Genova na hIodáile. Tá Pizzeria Balbi 35 lánthiomanta do chomhábhair úra séasúracha, d'aird ar mhionsonraí agus d'fháilteachas. Tar éis rath Balbi 34 i gcathair chósta Sarandë, tugann Balbi 35 táirge eisiach nuálach chuig margadh na hAlbáine: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  it: {
    "balbi-34": {
      tagline: "Piatti di stagione con radici genovesi in riva al mare.",
      about: "Ispirata alla strada e al numero del palazzo studentesco di Genova dove ci siamo tutti incontrati, il ristorante Balbi 34 ha un'assoluta dedizione a ingredienti freschi, stagionali, sostenibili e attenzione ai dettagli e alla generosità.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Pizza gourmet di Via Balbi, cotta con il calore costiero.",
      about: "Ispirata dalla via universitaria in cui ci siamo conosciuti tutti — Via Balbi a Genova, in Italia. La Pizzeria Balbi 35 è totalmente dedicata a ingredienti freschi e di stagione, alla cura dei dettagli e all'ospitalità. Dopo il successo di Balbi 34 nella città costiera di Saranda, Balbi 35 porta sul mercato albanese un prodotto esclusivo e innovativo: la Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  lv: {
    "balbi-34": {
      tagline: "Sezonas šķīvji ar Dženoves saknēm jūras krastā.",
      about: "Iedvesmojusies no ielas un studentu ēkas numura Dženovā, kur mēs visi satikāmies, restorānam Balbi 34 ir absolūta veltīšanās svaigiem, sezonāliem, ilgtspējīgiem produktiem un uzmanībai detaļām un dāsnumam.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Gardēžu pica no Via Balbi, cepta ar piekrastes siltumu.",
      about: "Iedvesmojušies no universitātes ielas, kur mēs visi sastapāmies — Via Balbi Dženovā, Itālijā. Pizzeria Balbi 35 ir pilnībā veltīta svaigām sezonas sastāvdaļām, uzmanībai pret detaļām un viesmīlībai. Pēc Balbi 34 panākumiem piekrastes pilsētā Sarandā, Balbi 35 piedāvā Albānijas tirgum ekskluzīvu un inovatīvu produktu: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  lt: {
    "balbi-34": {
      tagline: "Sezoninės lėkštės su Genovese šaknimis prie jūros.",
      about: "Įkvėptas gatvės ir studentų pastato numerio Genoje, kur mes visi susitikome, restoranas Balbi 34 turi absoliučią atsidavimą šviežiems, sezoniniams, tvariems ingredientams ir dėmesį detalėms bei dosnumui.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Gurmaniška pica iš Via Balbi, kepama su pajūrio šiluma.",
      about: "Įkvėpta universiteto gatvės, kurioje mes visi susipažinome — Via Balbi Genujoje, Italijoje. Pizzeria Balbi 35 yra visiškai pasišventusi šviežiems sezoniniams ingredientams, dėmesiui detalėms ir svetingumui. Po Balbi 34 sėkmės pajūrio mieste Sarandoje Balbi 35 albanų rinkai pristato išskirtinį ir novatorišką produktą: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  mt: {
    "balbi-34": {
      tagline: "Pjanċi staġjonali b'għeruq Ġenoveżi ħdejn il-baħar.",
      about: "Ispirata mill-istrada u n-numru tal-bini tal-istudenti f'Genova fejn kollha ltqajna, ir-ristorant Balbi 34 għandu dedikazzjoni assoluta għal ingredjenti friski, staġjonali, sostenibbli u attenzjoni għad-dettalji u l-ġenerożità.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Pizza Gourmet minn Via Balbi, moħmija bis-sħana tal-kosta.",
      about: "Imnebbħa mit-triq tal-università fejn iltqajna lkoll — Via Balbi f'Ġenova, l-Italja. Il-Pizzeria Balbi 35 hi għal kollox dedikata għal ingredjenti friski u staġjonali, attenzjoni għad-dettall u ospitalità. Wara s-suċċess ta' Balbi 34 fil-belt kostali ta' Sarandë, Balbi 35 iġib fis-suq Albaniż prodott esklussiv u innovattiv: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  pl: {
    "balbi-34": {
      tagline: "Sezonowe talerze z korzeniami Genovese nad morzem.",
      about: "Zainspirowana ulicą i numerem budynku studenckiego w Genui, gdzie się wszyscy spotkaliśmy, restauracja Balbi 34 ma absolutne poświęcenie świeżym, sezonowym, zrównoważonym składnikom oraz dbałość o szczegóły i hojność.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Wyśmienita pizza z Via Balbi, pieczona nadmorskim ciepłem.",
      about: "Zainspirowana ulicą uniwersytecką, na której wszyscy się poznaliśmy — Via Balbi w Genui we Włoszech. Pizzeria Balbi 35 jest w pełni oddana świeżym, sezonowym składnikom, dbałości o szczegóły i gościnności. Po sukcesie Balbi 34 w nadmorskim mieście Saranda, Balbi 35 wprowadza na rynek albański wyjątkowy i nowatorski produkt: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  pt: {
    "balbi-34": {
      tagline: "Pratos sazonais com raízes genovesas à beira-mar.",
      about: "Inspirado pela rua e pelo número do edifício estudantil em Génova, onde todos nos conhecemos, o restaurante Balbi 34 tem uma dedicação absoluta a ingredientes frescos, sazonais e sustentáveis e atenção aos detalhes e à generosidade.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Pizza gourmet da Via Balbi, assada no calor costeiro.",
      about: "Inspirada na rua universitária onde todos nos conhecemos — a Via Balbi em Génova, Itália. A Pizzeria Balbi 35 está totalmente dedicada a ingredientes frescos e sazonais, à atenção ao detalhe e à hospitalidade. Após o sucesso do Balbi 34 na cidade costeira de Sarandë, o Balbi 35 traz ao mercado albanês um produto exclusivo e inovador: a Pizza Gourmet.",
      city: "SARANDË",
    },
  },
  ro: {
    "balbi-34": {
      tagline: "Farfurii de sezon cu radacini genoveze la malul marii.",
      about: "Inspirat de strada și numărul clădirii studențești din Genova unde ne-am cunoscut cu toții, restaurantul Balbi 34 are o dedicare absolută față de ingredientele proaspete, de sezon, sustenabile și atenție la detalii și generozitate.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Pizza gourmet de la Via Balbi, coaptă cu căldură de coastă.",
      about: "Inspirat de strada universitară unde ne-am cunoscut cu toții — Via Balbi din Genova, Italia. Pizzeria Balbi 35 este pe deplin dedicată ingredientelor proaspete și de sezon, atenției la detalii și ospitalității. După succesul Balbi 34 în orașul de coastă Saranda, Balbi 35 aduce pe piața albaneză un produs exclusiv și inovator: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  sk: {
    "balbi-34": {
      tagline: "Sezónne taniere s koreňmi Genovese pri mori.",
      about: "Inšpirovaná ulicou a číslom študentskej budovy v Janove, kde sme sa všetci stretli, má reštaurácia Balbi 34 absolútnu oddanosť čerstvým, sezónnym, udržateľným ingredienciám a pozornosť k detailom a štedrosti.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Gurmánska pizza z Via Balbi, pečená s prímorským teplom.",
      about: "Inšpirovaní univerzitnou ulicou, kde sme sa všetci stretli — Via Balbi v talianskom Janove. Pizzeria Balbi 35 je úplne oddaná čerstvým sezónnym surovinám, dôrazu na detail a pohostinnosti. Po úspechu Balbi 34 v pobrežnom meste Saranda prináša Balbi 35 na albánsky trh exkluzívny a inovatívny produkt: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  sl: {
    "balbi-34": {
      tagline: "Sezonske plošče z genoveškimi koreninami ob morju.",
      about: "Navdihnjena z ulico in številko študentskega objekta v Genovi, kjer smo se vsi spoznali, ima restavracija Balbi 34 absolutno predanost svežim, sezonskim, trajnostnim sestavinam in pozornost do podrobnosti ter radodarnosti.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Gurmanska pica iz ulice Via Balbi, pečena na topli obali.",
      about: "Navdihnjeni z univerzitetno ulico, kjer smo se vsi spoznali — Via Balbi v Genovi v Italiji. Picerija Balbi 35 je v celoti predana svežim sezonskim sestavinam, pozornosti do podrobnosti in gostoljubnosti. Po uspehu Balbi 34 v obalnem mestu Saranda Balbi 35 na albanski trg prinaša ekskluziven in inovativen izdelek: Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  es: {
    "balbi-34": {
      tagline: "Platos de temporada con raíces genovesas junto al mar.",
      about: "Inspirado por la calle y el número del edificio estudiantil de Génova donde todos nos conocimos, el restaurante Balbi 34 tiene una dedicación absoluta a ingredientes frescos, de temporada y sostenibles, y atención al detalle y la generosidad.",
      city: "SARANDA",
    },
    "balbi-35": {
      tagline: "Pizza gourmet de Via Balbi, horneada con calidez costera.",
      about: "Inspirada en la calle universitaria donde todos nos conocimos — la Via Balbi en Génova, Italia. La Pizzeria Balbi 35 está totalmente dedicada a los ingredientes frescos y de temporada, al cuidado del detalle y a la hospitalidad. Tras el éxito de Balbi 34 en la ciudad costera de Sarandë, Balbi 35 trae al mercado albanés un producto exclusivo e innovador: la Pizza Gourmet.",
      city: "SARANDA",
    },
  },
  sv: {
    "balbi-34": {
      tagline: "Säsongens tallrikar med genovesiska rötter vid havet.",
      about: "Inspirerad av gatan och numret på studenthuset i Genua där vi alla träffades, har restaurangen Balbi 34 en absolut hängivenhet till färska, säsongsbetonade, hållbara ingredienser och uppmärksamhet på detaljer och generositet.",
      city: "SARANDË",
    },
    "balbi-35": {
      tagline: "Gourmetpizza från Via Balbi, bakad med kustvärme.",
      about: "Inspirerade av universitetsgatan där vi alla möttes — Via Balbi i Genua, Italien. Pizzeria Balbi 35 är helt dedikerad till färska säsongsråvaror, omsorg om detaljerna och gästvänlighet. Efter framgången med Balbi 34 i kuststaden Sarandë tar Balbi 35 en exklusiv och innovativ produkt till den albanska marknaden: Pizza Gourmet.",
      city: "SARANDË",
    },
  },
};

// Section-title translations keyed by English source title.
export const sectionTitles: Record<string, Record<string, string>> = {
  "Brunch · 09:00 – 14:00": {
    sq: "Brunch · 09:00 – 14:00", uk: "Бранч · 09:00 – 14:00", bg: "Бранч · 09:00 – 14:00",
    hr: "Brunch · 09:00 – 14:00", cs: "Brunch · 09:00 – 14:00", da: "Brunch · 09:00 – 14:00",
    nl: "Brunch · 09:00 – 14:00", et: "Brunch · 09:00 – 14:00", fi: "Brunssi · 09:00 – 14:00",
    fr: "Brunch · 09h00 – 14h00", de: "Brunch · 09:00 – 14:00", el: "Μπραντς · 09:00 – 14:00",
    hu: "Brunch · 09:00 – 14:00", ga: "Brunch · 09:00 – 14:00", it: "Brunch · 09:00 – 14:00",
    lv: "Branča · 09:00 – 14:00", lt: "Branča · 09:00 – 14:00", mt: "Brunch · 09:00 – 14:00",
    pl: "Brunch · 09:00 – 14:00", pt: "Brunch · 09:00 – 14:00", ro: "Brunch · 09:00 – 14:00",
    sk: "Brunch · 09:00 – 14:00", sl: "Brunch · 09:00 – 14:00", es: "Brunch · 09:00 – 14:00",
    sv: "Brunch · 09:00 – 14:00",
  },
  "Cold Appetizers": {
    sq: "Antipasta të ftohta", uk: "Холодні закуски", bg: "Студени предястия",
    hr: "Hladna predjela", cs: "Studené předkrmy", da: "Kolde forretter",
    nl: "Koude voorgerechten", et: "Külmad eelroad", fi: "Kylmät alkupalat",
    fr: "Entrées froides", de: "Kalte Vorspeisen", el: "Κρύα ορεκτικά",
    hu: "Hideg előételek", ga: "Réamhchúrsaí fuara", it: "Antipasti freddi",
    lv: "Aukstās uzkodas", lt: "Šaltieji užkandžiai", mt: "Antipasti kesħin",
    pl: "Przystawki zimne", pt: "Entradas frias", ro: "Aperitive reci",
    sk: "Studené predjedlá", sl: "Hladne predjedi", es: "Entrantes fríos",
    sv: "Kalla förrätter",
  },
  "Hot Appetizers": {
    sq: "Antipasta të nxehta", uk: "Гарячі закуски", bg: "Топли предястия",
    hr: "Topla predjela", cs: "Teplé předkrmy", da: "Varme forretter",
    nl: "Warme voorgerechten", et: "Soojad eelroad", fi: "Lämpimät alkupalat",
    fr: "Entrées chaudes", de: "Warme Vorspeisen", el: "Ζεστά ορεκτικά",
    hu: "Meleg előételek", ga: "Réamhchúrsaí teo", it: "Antipasti caldi",
    lv: "Siltās uzkodas", lt: "Šiltieji užkandžiai", mt: "Antipasti sħan",
    pl: "Przystawki ciepłe", pt: "Entradas quentes", ro: "Aperitive calde",
    sk: "Teplé predjedlá", sl: "Tople predjedi", es: "Entrantes calientes",
    sv: "Varma förrätter",
  },
  "Salads": {
    sq: "Sallata", uk: "Салати", bg: "Салати", hr: "Salate", cs: "Saláty",
    da: "Salater", nl: "Salades", et: "Salatid", fi: "Salaatit", fr: "Salades",
    de: "Salate", el: "Σαλάτες", hu: "Saláták", ga: "Sailéid", it: "Insalate",
    lv: "Salāti", lt: "Salotos", mt: "Insalati", pl: "Sałatki", pt: "Saladas",
    ro: "Salate", sk: "Šaláty", sl: "Solate", es: "Ensaladas", sv: "Sallader",
  },
  "Fresh Homemade Pasta": {
    sq: "Pasta të freskëta", uk: "Свіжа домашня паста", bg: "Прясна домашна паста",
    hr: "Svježa domaća tjestenina", cs: "Čerstvé domácí těstoviny", da: "Frisk hjemmelavet pasta",
    nl: "Verse huisgemaakte pasta", et: "Värske kodune pasta", fi: "Tuore kotitekoinen pasta",
    fr: "Pâtes fraîches maison", de: "Frische hausgemachte Pasta", el: "Φρέσκα σπιτικά ζυμαρικά",
    hu: "Friss házi tészta", ga: "Pasta úr baile", it: "Pasta fresca fatta in casa",
    lv: "Svaiga mājas pasta", lt: "Šviežia naminė pasta", mt: "Għaġin frisk tad-dar",
    pl: "Świeży domowy makaron", pt: "Massa fresca caseira", ro: "Paste proaspete de casă",
    sk: "Čerstvé domáce cestoviny", sl: "Sveže domače testenine", es: "Pasta fresca casera",
    sv: "Färsk hemgjord pasta",
  },
  "Main Dishes": {
    sq: "Pjata kryesore", uk: "Основні страви", bg: "Основни ястия",
    hr: "Glavna jela", cs: "Hlavní jídla", da: "Hovedretter",
    nl: "Hoofdgerechten", et: "Pearoad", fi: "Pääruoat", fr: "Plats principaux",
    de: "Hauptgerichte", el: "Κυρίως πιάτα", hu: "Főételek", ga: "Príomhchúrsaí",
    it: "Secondi piatti", lv: "Galvenie ēdieni", lt: "Pagrindiniai patiekalai",
    mt: "Platti prinċipali", pl: "Dania główne", pt: "Pratos principais",
    ro: "Feluri principale", sk: "Hlavné jedlá", sl: "Glavne jedi",
    es: "Platos principales", sv: "Huvudrätter",
  },
  "Dessert": {
    sq: "Ëmbëlsira", uk: "Десерт", bg: "Десерт", hr: "Desert", cs: "Dezert",
    da: "Dessert", nl: "Dessert", et: "Magustoit", fi: "Jälkiruoka", fr: "Dessert",
    de: "Dessert", el: "Επιδόρπιο", hu: "Desszert", ga: "Milseog", it: "Dessert",
    lv: "Deserts", lt: "Desertas", mt: "Deżerta", pl: "Deser", pt: "Sobremesa",
    ro: "Desert", sk: "Dezert", sl: "Sladica", es: "Postre", sv: "Dessert",
  },
  "Drinks & Beer": {
    sq: "Pije & Birrë", uk: "Напої та пиво", bg: "Напитки и бира",
    hr: "Pića i pivo", cs: "Nápoje a pivo", da: "Drikkevarer & øl",
    nl: "Drank & bier", et: "Joogid ja õlu", fi: "Juomat ja olut",
    fr: "Boissons & bière", de: "Getränke & Bier", el: "Ποτά & μπύρα",
    hu: "Italok és sör", ga: "Deochanna & Beoir", it: "Bevande e birra",
    lv: "Dzērieni un alus", lt: "Gėrimai ir alus", mt: "Xorb & Birra",
    pl: "Napoje i piwo", pt: "Bebidas e cerveja", ro: "Băuturi și bere",
    sk: "Nápoje a pivo", sl: "Pijače in pivo", es: "Bebidas y cerveza",
    sv: "Drycker & öl",
  },
  "Wine — Highlights": {
    sq: "Verërat — Përzgjedhje", uk: "Вино — добірка", bg: "Вино — акценти",
    hr: "Vino — izbor", cs: "Víno — výběr", da: "Vin — udvalg",
    nl: "Wijn — selectie", et: "Vein — valik", fi: "Viini — valikoima",
    fr: "Vin — sélection", de: "Wein — Auswahl", el: "Κρασί — επιλογές",
    hu: "Bor — válogatás", ga: "Fíon — Roghanna", it: "Vino — selezione",
    lv: "Vīns — izlase", lt: "Vynas — pasirinkimas", mt: "Inbid — Għażla",
    pl: "Wino — wybór", pt: "Vinho — destaques", ro: "Vinuri — selecție",
    sk: "Víno — výber", sl: "Vino — izbor", es: "Vino — selección",
    sv: "Vin — urval",
  },
  "Classic Pizza · 48h fermentation": {
    sq: "Pizza klasike · fermentim 48 orë", uk: "Класична піца · 48-годинна ферментація",
    bg: "Класическа пица · 48-часова ферментация", hr: "Klasična pizza · 48h fermentacije",
    cs: "Klasická pizza · 48h kvašení", da: "Klassisk pizza · 48 timers fermentering",
    nl: "Klassieke pizza · 48u rijping", et: "Klassikaline pitsa · 48h kääritus",
    fi: "Klassinen pizza · 48h käyminen", fr: "Pizza classique · fermentation 48h",
    de: "Klassische Pizza · 48h Reifung", el: "Κλασική πίτσα · ζύμωση 48 ωρών",
    hu: "Klasszikus pizza · 48 órás kelesztés", ga: "Pizza chlasaiceach · coipeadh 48u",
    it: "Pizza classica · lievitazione 48h", lv: "Klasiskā pica · 48h raudzēšana",
    lt: "Klasikinė pica · 48 val. fermentacija", mt: "Pizza klassika · fermentazzjoni ta' 48s",
    pl: "Pizza klasyczna · 48h fermentacji", pt: "Pizza clássica · fermentação 48h",
    ro: "Pizza clasică · fermentare 48h", sk: "Klasická pizza · 48h kvasenie",
    sl: "Klasična pizza · 48h fermentacije", es: "Pizza clásica · fermentación 48h",
    sv: "Klassisk pizza · 48h jäsning",
  },
  "Pizza Gourmet · 72h fermentation, served in 6 slices": {
    sq: "Pizza Gourmet · fermentim 72 orë, e servuar në 6 feta",
    uk: "Піца Гурме · 72-годинна ферментація, подається 6 шматків",
    bg: "Пица Гурме · 72-часова ферментация, сервирана на 6 парчета",
    hr: "Pizza Gourmet · 72h fermentacije, poslužena u 6 kriški",
    cs: "Pizza Gourmet · 72h kvašení, servírováno v 6 řezech",
    da: "Pizza Gourmet · 72 timers fermentering, serveret i 6 stykker",
    nl: "Pizza Gourmet · 72u rijping, in 6 stukken",
    et: "Pitsa Gourmet · 72h kääritus, serveeritakse 6 viiluna",
    fi: "Pizza Gourmet · 72h käyminen, tarjoillaan 6 palana",
    fr: "Pizza Gourmet · fermentation 72h, servie en 6 parts",
    de: "Pizza Gourmet · 72h Reifung, in 6 Stücken serviert",
    el: "Πίτσα Gourmet · ζύμωση 72 ωρών, σερβίρεται σε 6 κομμάτια",
    hu: "Pizza Gourmet · 72 órás kelesztés, 6 szeletben tálalva",
    ga: "Pizza Gourmet · coipeadh 72u, freastalaithe i 6 shlis",
    it: "Pizza Gourmet · lievitazione 72h, servita in 6 spicchi",
    lv: "Pica Gourmet · 72h raudzēšana, pasniegta 6 šķēlēs",
    lt: "Pica Gourmet · 72 val. fermentacija, patiekiama 6 gabalėliais",
    mt: "Pizza Gourmet · fermentazzjoni ta' 72s, servuta f'6 biċċiet",
    pl: "Pizza Gourmet · 72h fermentacji, podawana w 6 kawałkach",
    pt: "Pizza Gourmet · fermentação 72h, servida em 6 fatias",
    ro: "Pizza Gourmet · fermentare 72h, servită în 6 felii",
    sk: "Pizza Gourmet · 72h kvasenie, podávaná v 6 kúskoch",
    sl: "Pizza Gourmet · 72h fermentacije, postrežena v 6 kosih",
    es: "Pizza Gourmet · fermentación 72h, servida en 6 porciones",
    sv: "Pizza Gourmet · 72h jäsning, serveras i 6 bitar",
  },
  "Appetizers": {
    sq: "Antipasta", uk: "Закуски", bg: "Предястия", hr: "Predjela",
    cs: "Předkrmy", da: "Forretter", nl: "Voorgerechten", et: "Eelroad",
    fi: "Alkupalat", fr: "Entrées", de: "Vorspeisen", el: "Ορεκτικά",
    hu: "Előételek", ga: "Réamhchúrsaí", it: "Antipasti", lv: "Uzkodas",
    lt: "Užkandžiai", mt: "Antipasti", pl: "Przystawki", pt: "Entradas",
    ro: "Aperitive", sk: "Predjedlá", sl: "Predjedi", es: "Entrantes",
    sv: "Förrätter",
  },
  "Fresh Pasta & Risotto": {
    sq: "Pasta të freskëta & Rizoto", uk: "Свіжа паста та різото",
    bg: "Прясна паста и ризото", hr: "Svježa tjestenina i rižoto",
    cs: "Čerstvé těstoviny a rizoto", da: "Frisk pasta & risotto",
    nl: "Verse pasta & risotto", et: "Värske pasta ja risoto",
    fi: "Tuore pasta ja risotto", fr: "Pâtes fraîches & risotto",
    de: "Frische Pasta & Risotto", el: "Φρέσκα ζυμαρικά & ριζότο",
    hu: "Friss tészta és rizottó", ga: "Pasta úr & Risotto",
    it: "Pasta fresca & risotto", lv: "Svaiga pasta un rizoto",
    lt: "Šviežia pasta ir rizotas", mt: "Għaġin frisk u rizoto",
    pl: "Świeży makaron i risotto", pt: "Massa fresca e risoto",
    ro: "Paste proaspete și risotto", sk: "Čerstvé cestoviny a rizoto",
    sl: "Sveže testenine in rižota", es: "Pasta fresca y risotto",
    sv: "Färsk pasta och risotto",
  },
  "Mains": {
    sq: "Pjata kryesore", uk: "Основні страви", bg: "Основни ястия",
    hr: "Glavna jela", cs: "Hlavní jídla", da: "Hovedretter",
    nl: "Hoofdgerechten", et: "Pearoad", fi: "Pääruoat", fr: "Plats principaux",
    de: "Hauptgerichte", el: "Κυρίως πιάτα", hu: "Főételek", ga: "Príomhchúrsaí",
    it: "Secondi", lv: "Galvenie ēdieni", lt: "Pagrindiniai patiekalai",
    mt: "Platti prinċipali", pl: "Dania główne", pt: "Pratos principais",
    ro: "Feluri principale", sk: "Hlavné jedlá", sl: "Glavne jedi",
    es: "Principales", sv: "Huvudrätter",
  },
  "Burgers": {
    sq: "Burgera", uk: "Бургери", bg: "Бургери", hr: "Burgeri", cs: "Burgery",
    da: "Burgere", nl: "Burgers", et: "Burgerid", fi: "Burgerit", fr: "Burgers",
    de: "Burger", el: "Μπέργκερ", hu: "Burgerek", ga: "Borgairí", it: "Burger",
    lv: "Burgeri", lt: "Mėsainiai", mt: "Burgers", pl: "Burgery", pt: "Hambúrgueres",
    ro: "Burgeri", sk: "Burgre", sl: "Burgerji", es: "Hamburguesas", sv: "Burgare",
  },
};

export function translateSection(title: string, lang: string): string {
  if (lang === "en") return title;
  return sectionTitles[title]?.[lang] ?? title;
}

export function translateRestaurant(id: string, lang: string) {
  return restaurantContent[lang]?.[id] ?? restaurantContent.en[id];
}