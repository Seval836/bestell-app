import React, { useState } from "react";

// Lieferanten-E-Mail-Adressen, Verkäufer und spezifische E-Mail-Texte
const lieferantenEmails = {
  "Soares": {
    email: "Tiago.miguel@garrafeirasoares.pt",
    verkaeufer: "Tiago Miguel",
    emailText: (verkaeufer, produkte) => `Bom Dia ${verkaeufer},

Pretendemos encomendar:

${produkte}

Obrigado desde já,
Paul Kaiser`
  },
  "Novadis": {
    email: "apoioaocliente@novadis.pt",
    verkaeufer: "Fabiana",
    emailText: (verkaeufer, produkte) => `Bom Dia ${verkaeufer},

Pretendemos encomendar:

${produkte}

Obrigado desde já,
Paul Kaiser`
  },
  "Miracer": {
    email: "luis1mracer@sapo.pt",
    verkaeufer: "Luís",
    emailText: (verkaeufer, produkte) => `Bom Dia ${verkaeufer},

Pretendemos encomendar:

${produkte}

Obrigado desde já,
Paul Kaiser`
  },
  "Sovipral": {
    email: "v6.comercial@sovipral.pt",
    verkaeufer: "Jorge Machado",
    emailText: (verkaeufer, produkte) => `Bom Dia ${verkaeufer},

Pretendemos encomendar:

${produkte}

Obrigado desde já,
Paul Kaiser`
  },
  "Just Drinks": {
    email: "marco.guerreiro@justdrinks.pt",
    verkaeufer: "Marco Guerreiro",
    emailText: (verkaeufer, produkte) => `Bom Dia ${verkaeufer},

Pretendemos encomendar:

${produkte}

Obrigado desde já,
Paul Kaiser`
  },
  "Mania": {
    email: "stefan.hunold@gmail.com",
    verkaeufer: "Stefan Hunold",
    emailText: (verkaeufer, produkte) => `Hallo ${verkaeufer},

wir möchten folgende Produkte bestellen:

${produkte}

Vielen Dank im Voraus,
Paul Kaiser`
  },
  "Vicentina": {
    email: "cervejariavicentina@gmail.com",
    verkaeufer: "Catarina",
    emailText: (verkaeufer, produkte) => `Bom Dia ${verkaeufer},

Pretendemos encomendar:

${produkte}

Obrigado desde já,
Paul Kaiser`
  },
  "Rolhas": {
    email: "info@rolhasvinhos.com",
    verkaeufer: "António",
    emailText: (verkaeufer, produkte) => `Bom Dia ${verkaeufer},

Pretendemos encomendar:

${produkte}

Obrigado desde já,
Paul Kaiser`
  }
};

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

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Einfache Authentifizierung (für Demo-Zwecke)
    if (username === "Birds" && password === "Paul89") {
      onLogin(true);
      setError("");
    } else {
      setError("Falsche Anmeldedaten. Bitte überprüfen Sie Benutzername und Passwort.");
    }
  };

  return (
    <div style={{ 
      padding: 20, 
      background: "#121212", 
      minHeight: "100vh", 
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#2c2c2c",
        padding: 40,
        borderRadius: 10,
        width: "100%",
        maxWidth: 400,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)"
      }}>
        <h1 style={{ 
          fontSize: 28, 
          fontWeight: "bold", 
          marginBottom: 30, 
          textAlign: "center",
          color: "#4682B4"
        }}>
          🍸 Bestell-App Login
        </h1>
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 8, fontSize: 16 }}>
              Benutzername:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 5,
                border: "1px solid #555",
                background: "#1a1a1a",
                color: "white",
                fontSize: 16
              }}
              placeholder="Benutzername eingeben"
            />
          </div>
          
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 8, fontSize: 16 }}>
              Passwort:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 5,
                border: "1px solid #555",
                background: "#1a1a1a",
                color: "white",
                fontSize: 16
              }}
              placeholder="Passwort eingeben"
            />
          </div>
          
          {error && (
            <div style={{
              color: "#ff6b6b",
              marginBottom: 20,
              padding: 10,
              background: "rgba(255, 107, 107, 0.1)",
              borderRadius: 5,
              border: "1px solid #ff6b6b"
            }}>
              {error}
            </div>
          )}
          
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 15,
              background: "#4682B4",
              color: "white",
              borderRadius: 5,
              border: "none",
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            🔐 Anmelden
          </button>
        </form>
        
      </div>
    </div>
  );
}

function BestellApp() {
  const [ausgewählterLieferant, setAusgewählterLieferant] = useState("");
  const [bestellung, setBestellung] = useState({});
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentEmails, setSentEmails] = useState([]);

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
      setShowError(true);
      return;
    }

    // Gruppiere Produkte nach Lieferanten
    const bestellungenNachLieferant = {};
    gewählteProdukte.forEach((p) => {
      const lieferant = p.lieferant;
      if (!bestellungenNachLieferant[lieferant]) {
        bestellungenNachLieferant[lieferant] = [];
      }
      bestellungenNachLieferant[lieferant].push({
        name: p.name,
        einheit: p.einheit,
        menge: bestellung[p.produktcode]
      });
    });

    // Sammle E-Mail-Informationen
    const emailsToSend = [];
    Object.entries(bestellungenNachLieferant).forEach(([lieferant, produkte]) => {
      const lieferantInfo = lieferantenEmails[lieferant];
      if (!lieferantInfo) {
        console.error(`Keine E-Mail-Adresse für Lieferant: ${lieferant}`);
        return;
      }

      const bestellText = produkte
        .map((p) => `• ${p.name} (${p.einheit}) – Menge: ${p.menge}`)
        .join("\n");

      const subject = `Bestellung - ${lieferant}`;
      const body = lieferantInfo.emailText(lieferantInfo.verkaeufer, bestellText);

      const mailtoLink = `mailto:${lieferantInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank");
      
      emailsToSend.push({ 
        lieferant, 
        email: lieferantInfo.email, 
        verkaeufer: lieferantInfo.verkaeufer,
        produkte 
      });
    });

    // Zeige Erfolgsmeldung
    setSentEmails(emailsToSend);
    setShowSuccess(true);
  };

  return (
    <div style={{ padding: 20, background: "#121212", minHeight: "100vh", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: "bold" }}>🍸 Lieferanten-Bestellung</h1>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "8px 16px",
            background: "#ff6b6b",
            color: "white",
            borderRadius: 5,
            border: "none",
            cursor: "pointer"
          }}
        >
          🚪 Abmelden
        </button>
      </div>
      
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

      {!ausgewählterLieferant ? (
        <div style={{ 
          background: "#2c2c2c", 
          padding: 20, 
          borderRadius: 5, 
          textAlign: "center",
          color: "#888"
        }}>
          🔍 Bitte wählen Sie einen Lieferanten aus, um die verfügbaren Produkte zu sehen.
        </div>
      ) : (
        <div>
          <h3 style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10, color: "#4682B4" }}>
            📦 Produkte von {ausgewählterLieferant}:
          </h3>
          {gefilterteProdukte.map((p) => (
            <div key={p.produktcode} style={{ background: "#2c2c2c", padding: 15, marginBottom: 10, borderRadius: 5 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 16, fontWeight: "bold" }}>{p.name}</span>
                  <span style={{ marginLeft: 10, color: "#888" }}>({p.einheit})</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={bestellung[p.produktcode] || ""}
                    onChange={(e) => handleMengeChange(p.produktcode, e.target.value)}
                    style={{ 
                      padding: 10, 
                      borderRadius: 5, 
                      width: 100, 
                      fontSize: 16,
                      border: "1px solid #555",
                      background: "#1a1a1a",
                      color: "white",
                      textAlign: "center"
                    }}
                  />
                  {bestellung[p.produktcode] && bestellung[p.produktcode] > 0 && (
                    <button
                      onClick={() => handleMengeChange(p.produktcode, "")}
                      style={{
                        marginLeft: 10,
                        padding: "8px 12px",
                        background: "#ff6b6b",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                        fontSize: 12
                      }}
                    >
                      ❌
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
        <h2 style={{ fontSize: 18, fontWeight: "bold", margin: 0 }}>🛒 Aktuelle Bestellung:</h2>
        {Object.entries(bestellung).length > 0 && (
          <button
            onClick={() => setBestellung({})}
            style={{
              padding: "8px 16px",
              background: "#ff6b6b",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              fontSize: 14
            }}
          >
            🗑️ Alle löschen
          </button>
        )}
      </div>
      
      {Object.entries(bestellung).length === 0 && (
        <div style={{ 
          background: "#2c2c2c", 
          padding: 20, 
          borderRadius: 5, 
          textAlign: "center",
          color: "#888"
        }}>
          Keine Produkte in der Bestellung.
        </div>
      )}
      
      {Object.entries(bestellung).map(([code, menge]) => {
        const produkt = produkte.find((p) => p.produktcode === code);
        const knapp = menge <= (produkt?.lagerMinimum || 0);
        return (
          <div key={code} style={{ 
            background: "#2c2c2c", 
            padding: 12, 
            marginBottom: 8, 
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <span style={{ fontWeight: "bold" }}>{produkt?.name}</span>
              <span style={{ marginLeft: 10, color: "#4682B4", fontSize: 16 }}>
                {menge} {produkt?.einheit}
              </span>
              {knapp && <span style={{ marginLeft: 10, color: "#ff6b6b" }}>⚠️ Geringer Lagerbestand</span>}
            </div>
            <button
              onClick={() => handleMengeChange(code, "")}
              style={{
                padding: "6px 10px",
                background: "#ff6b6b",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 12
              }}
            >
              ❌
            </button>
          </div>
        );
      })}

      <button
        style={{ marginTop: 20, padding: 10, background: "#4682B4", color: "white", borderRadius: 5, border: "none", width: 250, fontSize: 16 }}
        onClick={handleBestellungAbsenden}
      >
        Bestellung abschicken
      </button>

      {/* Error Popup */}
      {showError && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#2c2c2c",
            padding: 30,
            borderRadius: 10,
            maxWidth: 400,
            textAlign: "center",
            border: "2px solid #ff6b6b",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
          }}>
            <div style={{
              fontSize: 48,
              marginBottom: 20,
              color: "#ff6b6b"
            }}>
              ⚠️
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
              color: "white"
            }}>
              Fehler
            </h3>
            <p style={{
              fontSize: 16,
              marginBottom: 25,
              color: "#ccc",
              lineHeight: 1.5
            }}>
              Bitte Menge angeben.
            </p>
            <button
              onClick={() => setShowError(false)}
              style={{
                padding: "12px 24px",
                background: "#4682B4",
                color: "white",
                border: "none",
                borderRadius: 5,
                fontSize: 16,
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#2c2c2c",
            padding: 30,
            borderRadius: 10,
            maxWidth: 600,
            textAlign: "center",
            border: "2px solid #4CAF50",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
          }}>
            <div style={{
              fontSize: 48,
              marginBottom: 20,
              color: "#4CAF50"
            }}>
              ✅
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
              color: "white"
            }}>
              Bestellung erfolgreich gesendet!
            </h3>
            <div style={{
              fontSize: 14,
              marginBottom: 25,
              color: "#ccc",
              lineHeight: 1.5,
              textAlign: "left",
              maxHeight: 300,
              overflowY: "auto"
            }}>
              <p style={{ marginBottom: 15, fontWeight: "bold", color: "white" }}>
                Folgende E-Mails wurden geöffnet:
              </p>
              {sentEmails.map((email, index) => (
                <div key={index} style={{
                  background: "#1a1a1a",
                  padding: 10,
                  marginBottom: 10,
                  borderRadius: 5,
                  border: "1px solid #333"
                }}>
                  <div style={{ fontWeight: "bold", color: "#4682B4" }}>
                    📧 {email.lieferant}
                  </div>
                  <div style={{ fontSize: 12, color: "#888" }}>
                    {email.email}
                  </div>
                  <div style={{ fontSize: 12, color: "#4CAF50", marginTop: 3 }}>
                    👤 {email.verkaeufer}
                  </div>
                  <div style={{ fontSize: 12, color: "#ccc", marginTop: 5 }}>
                    {email.produkte.length} Produkt(e)
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setShowSuccess(false);
                setSentEmails([]);
              }}
              style={{
                padding: "12px 24px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: 5,
                fontSize: 16,
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={setIsLoggedIn} />
      ) : (
        <BestellApp />
      )}
    </div>
  );
}

export default App;
