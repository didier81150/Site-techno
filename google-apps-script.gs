/**
 * Google Apps Script pour TechExplorer
 *
 * INSTRUCTIONS D'INSTALLATION :
 * 1. Ouvrez votre Google Sheet (https://docs.google.com/spreadsheets/d/1mjbyJjB3hlp6hg-uw6IzV5W6c3kZXTT7jW5EWA9pRBU/edit)
 * 2. Allez dans le menu : Extensions > Apps Script
 * 3. Effacez le code existant et collez tout le contenu de ce fichier
 * 4. Cliquez sur "Déployer" > "Nouveau déploiement"
 * 5. Sélectionnez le type "Application Web"
 * 6. Réglez les accès :
 *    - Exécuter en tant que : "Moi" (votre compte Google)
 *    - Qui a accès : "Tout le monde" (Anyone)
 * 7. Cliquez sur "Déployer" et autorisez les accès requis
 * 8. Copiez l'URL de l'application Web générée (ex: https://script.google.com/macros/s/.../exec)
 * 9. Remplacez la valeur de URL_SCRIPT dans vos fichiers HTML d'évaluation par cette URL.
 */

function doGet(e) {
  try {
    var params = e.parameter;
    if (!params || !params.nom) {
      return ContentService.createTextOutput("Statut: Ignoré (pas de données)");
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // Création des en-têtes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Horodateur",
        "Nom",
        "Prénom",
        "Niveau",
        "Classe",
        "Date Évaluation",
        "Score",
        "Total",
        "Note /20",
        "Évaluation"
      ]);
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#1a3a5c").setFontColor("#ffffff");
    }

    var timestamp = new Date();
    var nom = params.nom || "";
    var prenom = params.prenom || "";
    var niveau = params.niveau || "";
    var classe = params.classe || "";
    var dateEval = params.date || "";
    var score = params.score || "";
    var total = params.total || "";
    var note = params.note || "";
    var evaluation = params.eval || "";

    sheet.appendRow([
      timestamp,
      nom,
      prenom,
      niveau,
      classe,
      dateEval,
      score,
      total,
      note,
      evaluation
    ]);

    return ContentService.createTextOutput("OK");
  } catch (err) {
    return ContentService.createTextOutput("Erreur: " + err.toString());
  }
}
