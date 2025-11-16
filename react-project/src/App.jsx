import Card from './component/card'
const App = () => {
  const arr = ['karan', 'ram', 'rahul'];
  return (
    <div className='Parent'>
      {arr.map((name) => {
        return <Card user={name}/>
      })}
    </div>
  )
}

export default App