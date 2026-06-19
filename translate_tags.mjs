import { translate } from 'google-translate-api-x';
import fs from 'fs';

const langs = [
  'sq','uk','bg','hr','cs','da','nl','et','fi','fr','de','el','hu','ga','it','lv','lt','mt','pl','pt','ro','sk','sl','es','sv'
];

const b34 = "Fresh, seasonal, generous — from a Genovese student kitchen by the sea.";
const b35 = "Via Balbi soul meets slow-fermented gourmet pizza with coastal warmth.";

async function main() {
  const results = { b34: {}, b35: {} };
  for (const lang of langs) {
    try {
      const r34 = await translate(b34, { from: 'en', to: lang });
      results.b34[lang] = r34.text;
      console.log(lang + ' 34 done');
    } catch (e) {
      console.error(lang + ' 34 failed:', e.message);
      results.b34[lang] = b34;
    }
    try {
      const r35 = await translate(b35, { from: 'en', to: lang });
      results.b35[lang] = r35.text;
      console.log(lang + ' 35 done');
    } catch (e) {
      console.error(lang + ' 35 failed:', e.message);
      results.b35[lang] = b35;
    }
  }
  fs.writeFileSync('/tmp/translations.json', JSON.stringify(results, null, 2));
  console.log('Wrote /tmp/translations.json');
}

main();
