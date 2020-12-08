import React from 'react'
import './styles.less'
import { geCityList } from '@/utils/interFaces'
function Home (props) {
  React.useEffect(() => {
    geCityList({ type: "group"}).then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div className="pages-home">
    </div>
  )
}

export default Home
