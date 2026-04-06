import EliminationGame from '../components/EliminationGame'
import { getDishPool } from '../data/dishes'

const HEADING = <>Which <span className="elim-keyword-green">food</span> are you feeling less?</>

export default function EliminationScreen({ cuisine, weight, onDone, onBack }) {
  const items = getDishPool(cuisine, weight)

  return (
    <EliminationGame
      items={items}
      heading={HEADING}
      renderLabel={d => d.label}
      onDone={onDone}
      onBack={onBack}
    />
  )
}
