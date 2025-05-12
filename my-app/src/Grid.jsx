export function Grid({ items }){
  return (
    <div className="grid">
      {items.map(item => (
        <div className="card" key={item.ref}>
          <h2>{item.title}</h2>
          <p>{item.ref}</p>
        </div>
      ))}
    </div>
  )
}