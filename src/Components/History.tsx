import React from 'react'
const dummyData = [
  {
    id: 1,
    text: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator',
  },
  {
    id: 2,
    text: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator',
  },
  {
    id: 3,
    text: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator',
  },
  {
    id: 4,
    text: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator',
  },
]

const Hisory = () => {
  const data = dummyData.map((item) => {
    return <div>{item.text}</div>
  })
  return (
    <>
    <p className="divide-y divide-dashed">
    {data}
    </p>
    </>
  )
}

export default Hisory
