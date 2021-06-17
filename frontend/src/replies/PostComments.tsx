import PostCommentContent from './PostCommentContent'
import graphql from 'babel-plugin-relay/macro'
import { useCallback, useMemo } from 'react'
import { useFragment } from 'react-relay'
import { sortBy } from 'lodash'
import { PostComments_post$key } from './__generated__/PostComments_post.graphql'
import { useHistory } from 'react-router-dom'

const userFragment = graphql`
  fragment PostComments_post on Post {
    comments {
      id
      insertedAt
      ...PostCommentContent_comment
    }
  }
`

type Props = {
  post: PostComments_post$key
}

function PostComments(props: Props) {
  const post = useFragment(userFragment, props.post)
  const sortedComments = useMemo(() => sortBy(post.comments, ['insertedAt', 'id']), [post.comments])
  const history = useHistory()

  const handleClick = useCallback(
    (id: string) => {
      history.push(`/post/${id}`)
    },
    [history]
  )

  return (
    <>
      {sortedComments.map((comment) => (
        <PostCommentContent key={comment.id} comment={comment} onClick={handleClick} />
      ))}
    </>
  )
}

export default PostComments
