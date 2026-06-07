/**
 * clean-public-images.mjs
 * Borra las imágenes locales que ya migraron a PocketBase.
 * Ejecutar desde la raíz de andrea-moro:
 *   node scripts/clean-public-images.mjs
 */

import { rmSync, existsSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const IMAGES = join(ROOT, "public", "images");

// Carpetas completas — ya están en PocketBase
const DIRS_TO_DELETE = [
  join(IMAGES, "gallery"),
  join(IMAGES, "andrea"),
  join(IMAGES, "cursos"),
  join(IMAGES, "Flores"),
];

// Archivos sueltos — duplicados o sin usar
const FILES_TO_DELETE = [
  join(IMAGES, "About_selfie_a.webp"), // no importado en código (se usa main.jpeg)
  join(IMAGES, "Andrea Logo.webp"),     // no importado (se usa "Andrea Logo 2.webp")
  join(IMAGES, "Fondo.webp"),           // no importado (se usa Fondo2.webp)
  join(IMAGES, "LOGO.ai"),              // archivo fuente de diseño
];

let deleted = 0;
let skipped = 0;

for (const dir of DIRS_TO_DELETE) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`✓ Borrado: ${dir.replace(ROOT, ".")}`);
    deleted++;
  } else {
    console.log(`- Ya no existe: ${dir.replace(ROOT, ".")}`);
    skipped++;
  }
}

for (const file of FILES_TO_DELETE) {
  if (existsSync(file)) {
    rmSync(file, { force: true });
    console.log(`✓ Borrado: ${file.replace(ROOT, ".")}`);
    deleted++;
  } else {
    console.log(`- Ya no existe: ${file.replace(ROOT, ".")}`);
    skipped++;
  }
}

console.log(`\n✅ ${deleted} eliminados, ${skipped} ya no existían.`);
console.log("\nQuedan (en uso):");
console.log("  public/images/About_flower_a.webp");
console.log("  public/images/Andrea Logo 2.webp");
console.log("  public/images/Andrea_desk.webp");
console.log("  public/images/Fondo2.webp");
console.log("  public/images/Hola.png");
console.log("  public/images/logo_svg.svg");
console.log("  public/images/main.jpeg");
