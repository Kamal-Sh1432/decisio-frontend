function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.content}>
        <p style={styles.name}>Built & Designed by Kamal Sharma</p>
        <p style={styles.title}>
          Senior Business Analyst | Digital Strategist | AI Systems Builder
        </p>
        <p style={styles.copy}>
          © {new Date().getFullYear()} Decisio. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: "#000",
    borderTop: "1px solid #00e5ff",
    padding: "40px 20px",
    textAlign: "center"
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  name: {
    fontSize: "20px",
    color: "#00e5ff",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  title: {
    fontSize: "16px",
    color: "#ccc",
    marginBottom: "10px"
  },
  copy: {
    fontSize: "14px",
    color: "#666"
  }
};

export default Footer;