import { useState } from "react"
import { initialTravelPlan } from './places.js';

function PlaceTree ({ id, parentId, placesById, onComplete }) {
  const plan = placesById[id]
  // console.log(id)
  return (
    <>
      <li>
        {plan.title}
        <button onClick={() => {
          onComplete(parentId, id)
        }}>Complate</button>
        {
          plan.childIds.length > 0 &&
          <ol>
            {
              plan.childIds.map((childId) => (
                <PlaceTree 
                  key={childId}
                  id={childId}
                  parentId={id}
                  placesById={placesById}
                  onComplete={onComplete}
                />
              ))
            }
          </ol>
        }
      </li>
    </>
  )
}

export default function AvoidDeeplyNestedState () {
  const [plan, setPlan] = useState(initialTravelPlan)

  function handleComplete(parentId, id) {
    const parent = plan[parentId]
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((childId) => {
        return childId !== id
      })
    }
    
    setPlan({
      ...plan,
      [parentId]: nextParent
    })
  }

  const root = plan[0]

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {
          root.childIds.map((id) => (
            <PlaceTree
              key={id}
              id={ id } 
              placesById={plan}
              parentId={0}
              onComplete={handleComplete}
            />
          ))
        }
      </ol>
    </>
  )
}