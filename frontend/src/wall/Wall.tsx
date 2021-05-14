import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import PostList from './PostList'
import { Wall_root$key } from './__generated__/Wall_root.graphql'

const wallFragment = graphql`
  fragment Wall_root on RootQueryType {
    ...PostList_root
  }
`

type Props = {
  root: Wall_root$key
}

function Wall(props: Props) {
  const root = useFragment(wallFragment, props.root)

  return (
    <>
      <PostList root={root} />
    </>
  )
}

export default Wall
