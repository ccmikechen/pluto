import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostComments_post$key } from './__generated__/PostComments_post.graphql'
import PostCommentContent from './PostCommentContent'

const userFragment = graphql`
  fragment PostComments_post on Post {
    comments {
      id
      ...PostCommentContent_comment
    }
  }
`

type Props = {
  post: PostComments_post$key
}

function PostComments(props: Props) {
  const post = useFragment(userFragment, props.post)
  return (
    <div>
      {post.comments.map((comment) => (
        <PostCommentContent key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

export default PostComments
