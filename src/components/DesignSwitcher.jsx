import { useDesignAttribute } from '@/hooks/useHtmlAttribute'
import { DEFAULT_DESIGN, DESIGNS, setDesign } from '@/lib/designs'

export function DesignSwitcher() {
  let active = useDesignAttribute(DEFAULT_DESIGN)

  return (
    <div className="switcher" role="group" aria-label="Choose a design">
      <span className="sw-label">design</span>
      {DESIGNS.map((design) => (
        <button
          key={design.id}
          type="button"
          className="sw-option"
          aria-pressed={design.id === active}
          onClick={() => setDesign(design.id)}
        >
          {design.name}
        </button>
      ))}
    </div>
  )
}
