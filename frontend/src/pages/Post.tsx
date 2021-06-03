import { useParams } from 'react-router-dom'

interface ParamTypes {
  id: string
}

function Post() {
  const { id } = useParams<ParamTypes>()

  return <div>{id}</div>
}

export default Post
