import { createPortal } from 'react-dom'

export default function Modal({ onClose, children }) {
  const portalRoot = document.getElementById('portal-root')
  if (!portalRoot) return null

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        {children}
      </div>
    </div>,
    portalRoot
  )
}
