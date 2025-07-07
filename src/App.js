import React, { useState } from "react";

const produkte = [
  { name: "Bombay", einheit: "Flasche", lieferant: "Soares", produktcode: "GIN-001", lagerMinimum: 2 },
  { name: "Tanqueray", einheit: "Flasche", lieferant: "Soares", produktcode: "GIN-002", lagerMinimum: 2 },
  { name: "Hendricks", einheit: "Flasche", lieferant: "Soares", produktcode: "GIN-003", lagerMinimum: 2 },
  { name: "Gin Mare", einheit: "Flasche", lieferant: "Soares", produktcode: "GIN-004", lagerMinimum: 2 },
  { name: "Gin Sul", einheit: "Flasche", lieferant: "Soares", produktcode: "GIN-005", lagerMinimum: 2 },
  { name: "Monkey 47", einheit: "Flasche", lieferant: "Soares", produktcode: "GIN-006", lagerMinimum: 2 },
  { name: "Havana Club", einheit: "Flasche", lieferant: "Soares", produktcode: "RUM-001", lagerMinimum: 2 },
  { name: "Legendário", einheit: "Flasche", lieferant: "Soares", produktcode: "RUM-002", lagerMinimum: 2 },
  { name: "Zacapa", einheit: "Flasche", lieferant: "Soares", produktcode: "RUM-003", lagerMinimum: 2 },
  { name: "José Cuervo Blanco", einheit: "Flasche", lieferant: "Soares", produktcode: "TEQU-001", lagerMinimum: 2 },
  { name: "Stolichnaya", einheit: "Flasche", lieferant: "Soares", produktcode: "VODK-001", lagerMinimum: 2 },
  { name: "Famous Grouse", einheit: "Flasche", lieferant: "Soares", produktcode: "WHIS-001", lagerMinimum: 2 },
  { name: "Bushmills", einheit: "Flasche", lieferant: "Soares", produktcode: "WHIS-002", lagerMinimum: 2 },
  { name: "Bullet Bourbon", einheit: "Flasche", lieferant: "Soares", produktcode: "WHIS-003", lagerMinimum: 2 },
  { name: "Jack Daniels", einheit: "Flasche", lieferant: "Soares", produktcode: "WHIS-004", lagerMinimum: 2 },
  { name: "Lagavulin", einheit: "Flasche", lieferant: "Soares", produktcode: "WHIS-005", lagerMinimum: 2 },
  { name: "Medronho", einheit: "Flasche", lieferant: "Soares", produktcode: "LOCA-001", lagerMinimum: 2 },
  { name: "Macieira", einheit: "Flasche", lieferant: "Soares", produktcode: "LOCA-002", lagerMinimum: 2 },
  { name: "Amarguinha", einheit: "Flasche", lieferant: "Soares", produktcode: "LOCA-003", lagerMinimum: 2 },
  { name: "Beirão", einheit: "Flasche", lieferant: "Soares", produktcode: "LOCA-004", lagerMinimum: 2 },
  { name: "Moscatel", einheit: "Flasche", lieferant: "Soares", produktcode: "LOCA-005", lagerMinimum: 2 },
  { name: "Porto Tawny", einheit: "Flasche", lieferant: "Soares", produktcode: "PORT-001", lagerMinimum: 2 },
  { name: "Porto Ruby", einheit: "Flasche", lieferant: "Soares", produktcode: "PORT-002", lagerMinimum: 2 },
  { name: "Porto Dry", einheit: "Flasche", lieferant: "Soares", produktcode: "PORT-003", lagerMinimum: 2 },
  { name: "Aperol", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-001", lagerMinimum: 2 },
  { name: "Campari", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-002", lagerMinimum: 2 },
  { name: "Lilét Rosé", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-003", lagerMinimum: 2 },
  { name: "Martini Bianco", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-004", lagerMinimum: 2 },
  { name: "Martini Rubino", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-005", lagerMinimum: 2 },
  { name: "Triple Sec", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-006", lagerMinimum: 2 },
  { name: "Kahlua", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-007", lagerMinimum: 2 },
  { name: "Cachaça 51", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-008", lagerMinimum: 2 },
  { name: "Pisco 1615", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-009", lagerMinimum: 2 },
  { name: "43", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-010", lagerMinimum: 2 },
  { name: "Sambuca", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-011", lagerMinimum: 2 },
  { name: "Frangelico", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-012", lagerMinimum: 2 },
  { name: "Jägermeister", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-013", lagerMinimum: 2 },
  { name: "Baileys", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-014", lagerMinimum: 2 },
  { name: "Limoncello", einheit: "Flasche", lieferant: "Soares", produktcode: "LICO-015", lagerMinimum: 2 },
  { name: "Tónica", einheit: "Flasche", lieferant: "Soares", produktcode: "SCHW-001", lagerMinimum: 2 },
  { name: "Ginger Ale", einheit: "Flasche", lieferant: "Soares", produktcode: "SCHW-002", lagerMinimum: 2 },
  { name: "Limão", einheit: "Flasche", lieferant: "Soares", produktcode: "SCHW-003", lagerMinimum: 2 },
  { name: "Premium", einheit: "Flasche", lieferant: "Soares", produktcode: "FEVE-001", lagerMinimum: 2 },
  { name: "Ginger Beer", einheit: "Flasche", lieferant: "Soares", produktcode: "FEVE-002", lagerMinimum: 2 },
  { name: "Angostura", einheit: "Flasche", lieferant: "Soares", produktcode: "SYRU-001", lagerMinimum: 2 },
  { name: "Zwickl Barril", einheit: "Kiste", lieferant: "Soares", produktcode: "BEER-001", lagerMinimum: 2 },
  { name: "Born IPA", einheit: "Kiste", lieferant: "Soares", produktcode: "BEER-002", lagerMinimum: 2 },
  { name: "Erva Price", einheit: "Kiste", lieferant: "Soares", produktcode: "BEER-003", lagerMinimum: 2 },
  { name: "Peste e Sidra", einheit: "Kiste", lieferant: "Soares", produktcode: "BEER-004", lagerMinimum: 2 },
  { name: "Corona", einheit: "Kiste", lieferant: "Soares", produktcode: "BEER-005", lagerMinimum: 2 },
  { name: "Barril 50L", einheit: "Kiste", lieferant: "Novadis", produktcode: "CERV-001", lagerMinimum: 2 },
  { name: "Lagunita Barril", einheit: "Kiste", lieferant: "Novadis", produktcode: "CERV-002", lagerMinimum: 2 },
  { name: "Sagres 33cl", einheit: "Kiste", lieferant: "Novadis", produktcode: "CERV-003", lagerMinimum: 2 },
  { name: "Sagres 25cl", einheit: "Kiste", lieferant: "Novadis", produktcode: "CERV-004", lagerMinimum: 2 },
  { name: "Sagres Preta", einheit: "Kiste", lieferant: "Novadis", produktcode: "CERV-005", lagerMinimum: 2 },
  { name: "Bandida", einheit: "Kiste", lieferant: "Novadis", produktcode: "CERV-006", lagerMinimum: 2 },
  { name: "Luso 25cl", einheit: "Kiste", lieferant: "Novadis", produktcode: "ÁGUA-001", lagerMinimum: 2 },
  { name: "Luso 1L", einheit: "Kiste", lieferant: "Novadis", produktcode: "ÁGUA-002", lagerMinimum: 2 },
  { name: "Luso c/gás 25cl", einheit: "Kiste", lieferant: "Novadis", produktcode: "ÁGUA-003", lagerMinimum: 2 },
  { name: "Luso c/gás 1L", einheit: "Kiste", lieferant: "Novadis", produktcode: "ÁGUA-004", lagerMinimum: 2 },
  { name: "Cola 23cl", einheit: "Kiste", lieferant: "Miracer", produktcode: "SOFT-001", lagerMinimum: 2 },
  { name: "Cola Zero 23cl", einheit: "Kiste", lieferant: "Miracer", produktcode: "SOFT-002", lagerMinimum: 2 },
  { name: "Fanta 25cl", einheit: "Kiste", lieferant: "Miracer", produktcode: "SOFT-003", lagerMinimum: 2 },
  { name: "Sprite 23cl", einheit: "Kiste", lieferant: "Miracer", produktcode: "SOFT-004", lagerMinimum: 2 },
  { name: "Sprite 1L", einheit: "Kiste", lieferant: "Miracer", produktcode: "SOFT-005", lagerMinimum: 2 },
  { name: "Erdinger Hefe", einheit: "Kiste", lieferant: "Sovipral", produktcode: "CERV-001", lagerMinimum: 2 },
  { name: "Erdinger s/álcool", einheit: "Kiste", lieferant: "Sovipral", produktcode: "CERV-002", lagerMinimum: 2 },
  { name: "Eira S. Miguel Branco", einheit: "Kiste", lieferant: "Sovipral", produktcode: "VINH-001", lagerMinimum: 2 },
  { name: "Eira S. Miguel Tinto", einheit: "Kiste", lieferant: "Sovipral", produktcode: "VINH-002", lagerMinimum: 2 },
  { name: "Eira S. Miguel Rosé", einheit: "Kiste", lieferant: "Sovipral", produktcode: "VINH-003", lagerMinimum: 2 },
  { name: "Bico Amarelo", einheit: "Kiste", lieferant: "Sovipral", produktcode: "VINH-004", lagerMinimum: 2 },
  { name: "NC Seco", einheit: "Kiste", lieferant: "Sovipral", produktcode: "VINH-005", lagerMinimum: 2 },
  { name: "Ocean IPA", einheit: "Kiste", lieferant: "Just Drinks", produktcode: "OCEA-001", lagerMinimum: 2 },
  { name: "Ocean Lager", einheit: "Kiste", lieferant: "Just Drinks", produktcode: "OCEA-002", lagerMinimum: 2 },
  { name: "Ocean 0.0%", einheit: "Kiste", lieferant: "Just Drinks", produktcode: "OCEA-003", lagerMinimum: 2 },
  { name: "PT Man O'War", einheit: "Kiste", lieferant: "Mania", produktcode: "BEER-001", lagerMinimum: 2 },
  { name: "Black Hole", einheit: "Kiste", lieferant: "Mania", produktcode: "BEER-002", lagerMinimum: 2 },
  { name: "Sunstorm", einheit: "Kiste", lieferant: "Mania", produktcode: "BEER-003", lagerMinimum: 2 },
  { name: "Golden Ale", einheit: "Kiste", lieferant: "Vicentina", produktcode: "CERV-001", lagerMinimum: 2 },
  { name: "Peluda Branco", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-001", lagerMinimum: 2 },
  { name: "Peluda Rosé", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-002", lagerMinimum: 2 },
  { name: "Moinho Gato Tinto", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-003", lagerMinimum: 2 },
  { name: "Duckman Branco", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-004", lagerMinimum: 2 },
  { name: "Superavit", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-005", lagerMinimum: 2 },
  { name: "Serra Oca", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-006", lagerMinimum: 2 },
  { name: "Curtimenta", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-007", lagerMinimum: 2 },
  { name: "Saroto Palhete", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-008", lagerMinimum: 2 },
  { name: "Suba Pet Nat. Branco", einheit: "Kiste", lieferant: "Rolhas", produktcode: "VINH-009", lagerMinimum: 2 },
  { name: "Murmúrio", einheit: "Kiste", lieferant: "Rolhas", produktcode: "CERV-001", lagerMinimum: 2 },
  { name: "Creature", einheit: "Kiste", lieferant: "Rolhas", produktcode: "CERV-002", lagerMinimum: 2 },
];

function App() {
  const [ausgewählterLieferant, setAusgewählterLieferant] = useState("");
  const [bestellung, setBestellung] = useState({});

  const lieferanten = [...new Set(produkte.map((p) => p.lieferant))];
  const gefilterteProdukte = produkte.filter(
    (p) => !ausgewählterLieferant || p.lieferant === ausgewählterLieferant
  );

  const handleMengeChange = (code, menge) => {
    const parsed = parseInt(menge);
    if (!isNaN(parsed)) {
      setBestellung((prev) => ({ ...prev, [code]: parsed }));
    } else if (menge === "") {
      setBestellung((prev) => {
        const copy = { ...prev };
        delete copy[code];
        return copy;
      });
    }
  };

  const handleBestellungAbsenden = () => {
    const gewählteProdukte = produkte.filter((p) => bestellung[p.produktcode] > 0);
    if (gewählteProdukte.length === 0) {
      window.alert("Bitte gib mindestens ein Produkt mit Menge an.");
      return;
    }

    const bestellText = gewählteProdukte
      .map((p) => {
        const menge = bestellung[p.produktcode];
        return `• ${p.name} (${p.einheit}) – Menge: ${menge}\n  Lieferant: ${p.lieferant}`;
      })
      .join("\n\n");

    const mailtoLink = `mailto:seval.eroglu2019@gmail.com?subject=Testbestellung&body=${encodeURIComponent(bestellText)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div style={{ padding: 20, background: "#121212", minHeight: "100vh", color: "white" }}>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>🍸 Lieferanten-Bestellung</h1>
      <label style={{ marginBottom: 8, display: "block" }}>Lieferant auswählen:</label>
      <select
        value={ausgewählterLieferant}
        onChange={(e) => setAusgewählterLieferant(e.target.value)}
        style={{ padding: 8, borderRadius: 4, width: "100%", marginBottom: 15 }}
      >
        <option value="">-- Lieferant auswählen --</option>
        {lieferanten.map((l) => (
          <option key={l} value={l}>{l}</option>
        ))}
      </select>

      {gefilterteProdukte.map((p) => (
        <div key={p.produktcode} style={{ background: "#2c2c2c", padding: 10, marginBottom: 10, borderRadius: 5 }}>
          <span style={{ marginRight: 10 }}>{p.name} ({p.einheit})</span>
          <input
            type="number"
            min="0"
            placeholder="Menge"
            value={bestellung[p.produktcode] || ""}
            onChange={(e) => handleMengeChange(p.produktcode, e.target.value)}
            style={{ marginLeft: 10, padding: 8, borderRadius: 4, width: 80 }}
          />
        </div>
      ))}

      <h2 style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>🛒 Aktuelle Bestellung:</h2>
      {Object.entries(bestellung).length === 0 && <div>Keine Produkte ausgewählt.</div>}
      {Object.entries(bestellung).map(([code, menge]) => {
        const produkt = produkte.find((p) => p.produktcode === code);
        const knapp = menge <= (produkt?.lagerMinimum || 0);
        return (
          <div key={code} style={{ marginBottom: 4 }}>
            {produkt?.name} – {menge} {produkt?.einheit}
            {knapp ? " ⚠️ Geringer Lagerbestand" : ""}
          </div>
        );
      })}

      <button
        style={{ marginTop: 20, padding: 10, background: "#4682B4", color: "white", borderRadius: 5, border: "none", width: 250, fontSize: 16 }}
        onClick={handleBestellungAbsenden}
      >
        📤 Bestellung abschicken
      </button>
    </div>
  );
}

export default App;
