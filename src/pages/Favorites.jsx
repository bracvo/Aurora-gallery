import { useState } from 'react'

const FAVORITES = [
  { id: 1, title: 'Dawn Ridge', accent: 'sand' },
  { id: 2, title: 'Violet Coast', accent: 'lavender' },
  { id: 3, title: 'Glass Harbor', accent: 'teal' },
]

function FavoriteCard({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="favorite-card">
      <div className={`favorite-art favorite-art--${item.accent}`} />
      <div className="favorite-card-body">
        <span>{item.title}</span>
        <button
          type="button"
          className="favorite-menu-trigger"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          &#8942;
        </button>
        {open && (
          <ul className="favorite-menu" role="menu">
            <li role="menuitem">
              <button type="button" className="favorite-menu-option">Move to top</button>
            </li>
            <li role="menuitem">
              <button type="button" className="favorite-menu-option">Rename</button>
            </li>
            <li role="menuitem">
              <button type="button" className="favorite-menu-option">Remove from favorites</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Favorites() {
  return (
    <section className="favorites-page">
      <h1>Favorites</h1>
      <p className="hint">Your saved pieces, with quick actions per card.</p>
      <div className="favorites-grid">
        {FAVORITES.map((item) => (
          <FavoriteCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
