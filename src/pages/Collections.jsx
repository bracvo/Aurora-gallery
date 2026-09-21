export default function Collections() {
  const collections = ['Coastal', 'Desert', 'Urban Night', 'Botanical']
  return (
    <section className="collections-page">
      <h1>Collections</h1>
      <ul className="collections-list">
        {collections.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  )
}
