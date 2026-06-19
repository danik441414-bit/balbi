import { translate } from 'google-translate-api-x';
import fs from 'fs';

const langs = ['sq','uk','bg','hr','cs','da','nl','et','fi','fr','de','el','hu','ga','it','lv','lt','mt','pl','pt','ro','sk','sl','es','sv'];
const b34 = "Seasonal plates with Genovese roots by the sea.";
const b35 = "Gourmet pizza from Via Balbi, baked with coastal warmth.";

async function main() {
  const results = { b34: {}, b35: {} };
  for (const lang of langs) {
    try {
      const r34 = await translate(b34, { from: 'en', to: lang });
      results.b34[lang] = r34.text;
    } catch (e) { results.b34[lang] = b34; }
    try {
      const r35 = await translate(b35, { from: 'en', to: lang });
      results.b35[lang] = r35.text;
    } catch (e) { results.b35[lang] = b35; }
  }
  fs.writeFileSync('/tmp/translations2.json', JSON.stringify(results, null, 2));
  console.log('done');
}
main();
