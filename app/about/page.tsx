export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>

      <h1>About Pärnänen & Pojat</h1>

      <p style={{ fontSize: 18, lineHeight: 1.6, color: "#444" }}>
        Pärnänen & Pojat is a vintage typewriter store specializing in
        carefully restored writing machines from the 20th century.
      </p>

      <p style={{ fontSize: 18, lineHeight: 1.6, color: "#444" }}>
        Each typewriter is selected for quality, character, and history.
        We believe in the beauty of analog writing in a digital world.
      </p>

      <div style={{
        marginTop: 30,
        padding: 20,
        background: "#f5f5f5",
        borderRadius: 10
      }}>
        <h3>Contact</h3>
        <p>Email: info@parnanenpojot.com</p>
        <p>Location: Helsinki, Finland</p>
      </div>

    </div>
  )
}