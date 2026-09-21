import { useState } from 'react'
import SortDropdown from '../components/SortDropdown.jsx'
import Modal from '../components/Modal.jsx'

const ITEMS = [
  {
    id: 1,
    title: 'Dawn Ridge',
    medium: 'Giclee print, 18x24in',
    scene: 'mountains',
    sky: '#e8c9a0',
    ground: '#a8763f',
    accent: '#f3ede0',
  },
  {
    id: 2,
    title: 'Violet Coast',
    medium: 'Giclee print, 16x20in',
    scene: 'waves',
    sky: '#c7b8dd',
    ground: '#5b4a7a',
    accent: '#f1e9f7',
  },
  {
    id: 3,
    title: 'Glass Harbor',
    medium: 'Giclee print, 20x30in',
    scene: 'skyline',
    sky: '#bcd6da',
    ground: '#3d6b74',
    accent: '#eef7f7',
  },
  {
    id: 4,
    title: 'Quiet Orchard',
    medium: 'Giclee print, 18x24in',
    scene: 'forest',
    sky: '#d9ddb6',
    ground: '#5c6b3c',
    accent: '#f6f7e9',
  },
  {
    id: 5,
    title: 'Ember Field',
    medium: 'Giclee print, 16x20in',
    scene: 'dunes',
    sky: '#e9b998',
    ground: '#8a3f2c',
    accent: '#fbe8d6',
  },
  {
    id: 6,
    title: 'Salt Meadow',
    medium: 'Giclee print, 18x24in',
    scene: 'meadow',
    sky: '#cdd9d2',
    ground: '#436157',
    accent: '#eef5f1',
  },
]

function Thumb({ scene, sky, ground, accent }) {
  return (
    <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="150" fill={sky} />
      {scene === 'mountains' && (
        <>
          <circle cx="150" cy="35" r="18" fill={accent} />
          <path d="M0 100 L60 60 L110 95 L150 70 L200 105 L200 150 L0 150 Z" fill={ground} />
        </>
      )}
      {scene === 'waves' && (
        <>
          <circle cx="40" cy="30" r="14" fill={accent} />
          <path d="M0 95 Q25 80 50 95 T100 95 T150 95 T200 95 L200 150 L0 150 Z" fill={ground} />
          <path d="M0 115 Q25 102 50 115 T100 115 T150 115 T200 115 L200 150 L0 150 Z" fill={accent} opacity="0.5" />
        </>
      )}
      {scene === 'skyline' && (
        <>
          <circle cx="165" cy="30" r="16" fill={accent} />
          <rect x="15" y="55" width="22" height="80" fill={ground} />
          <rect x="45" y="75" width="18" height="60" fill={ground} />
          <rect x="70" y="40" width="26" height="95" fill={ground} />
          <rect x="105" y="65" width="20" height="70" fill={ground} />
          <rect x="132" y="50" width="24" height="85" fill={ground} />
        </>
      )}
      {scene === 'forest' && (
        <>
          <circle cx="155" cy="28" r="15" fill={accent} />
          <path d="M30 130 L30 80 M30 90 L10 100 M30 90 L50 100 M30 70 L15 82 M30 70 L45 82" stroke={ground} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M90 130 L90 60 M90 75 L65 90 M90 75 L115 90 M90 50 L70 65 M90 50 L110 65" stroke={ground} strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M150 130 L150 85 M150 95 L132 105 M150 95 L168 105" stroke={ground} strokeWidth="6" fill="none" strokeLinecap="round" />
        </>
      )}
      {scene === 'dunes' && (
        <>
          <circle cx="45" cy="35" r="20" fill={accent} />
          <path d="M0 110 Q50 80 100 108 T200 100 L200 150 L0 150 Z" fill={ground} />
        </>
      )}
      {scene === 'meadow' && (
        <>
          <circle cx="160" cy="32" r="14" fill={accent} />
          <path d="M0 120 Q50 105 100 118 T200 112 L200 150 L0 150 Z" fill={ground} />
          <circle cx="55" cy="128" r="3" fill={accent} />
          <circle cx="90" cy="135" r="3" fill={accent} />
          <circle cx="130" cy="126" r="3" fill={accent} />
        </>
      )}
    </svg>
  )
}

export default function Home() {
  const [sort, setSort] = useState('Newest first')
  const [active, setActive] = useState(null)

  return (
    <section className="home-page">
      <div className="toolbar">
        <h1>Featured prints</h1>
        <SortDropdown value={sort} onChange={setSort} />
      </div>
      <p className="hint">Currently sorted by: {sort}</p>
      <div className="grid">
        {ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="card"
            onClick={() => setActive(item)}
          >
            <div className="thumb">
              <Thumb scene={item.scene} sky={item.sky} ground={item.ground} accent={item.accent} />
            </div>
            <div className="card-title">{item.title}</div>
          </button>
        ))}
      </div>

      {active && (
        <Modal onClose={() => setActive(null)}>
          <div className="quickview">
            <div className="quickview-thumb">
              <Thumb scene={active.scene} sky={active.sky} ground={active.ground} accent={active.accent} />
            </div>
            <h2>{active.title}</h2>
            <p className="quickview-medium">{active.medium}</p>
          </div>
        </Modal>
      )}
    </section>
  )
}
