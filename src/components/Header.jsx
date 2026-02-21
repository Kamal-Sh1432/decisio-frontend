import logo from "../assets/logo.png";

function Header() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img src={logo} alt="Decisio Logo" style={styles.logo} />
        <div>
          <div style={styles.brand}>DECISIO</div>
          <div style={styles.tagline}>
            Intelligent Business Decision Engine
          </div>
        </div>
      </div>

      <div style={styles.right}>
        <span style={styles.subheadline}>
          RAW DATA. EXECUTIVE DECISIONS.
        </span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    padding: "20px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid gold"
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },
  logo: {
  width: "170px",
  filter: "drop-shadow(0 0 25px gold)",
  objectFit: "contain"
  },
  brand: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "gold",
    letterSpacing: "4px"
  },
  tagline: {
    fontSize: "14px",
    color: "#ccc",
    marginTop: "4px"
  },
  right: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#00e5ff"
  },
  subheadline: {
    letterSpacing: "2px"
  }
};

export default Header;