import { useCallback, useState } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import { PostQuery as PostQueryType } from './__generated__/PostQuery.graphql'
import PostContent from '../wall/PostContent'
import { styled, Typography, Box } from '@material-ui/core'
import PostComments from '../replies/PostComments'
import CreateCommentBox from '../replies/CreateCommentBox'
import useCreateCommentMutation from '../replies/hooks/useCreateCommentMutation'

const PostQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      ...PostContent_post
      ...PostComments_post
    }
  }
`

const PostCommentsContainer = styled(Box)({
  overflowY: 'scroll',
  padding: '1rem',
})

const CommentsContainer = styled('div')({
  margin: '2rem 0 0 1rem',
})

const ReplyContainer = styled(Box)({
  padding: '1rem',
  backgroundColor: '#2F3B4C',
})

interface ParamTypes {
  id: string
}

function Post() {
  const { id } = useParams<ParamTypes>()
  const data = useLazyLoadQuery<PostQueryType>(PostQuery, { id })
  const [commitCreateComment] = useCreateCommentMutation()

  const [comment, setComment] = useState<string>('')

  const handleCommentChange = useCallback(
    (text: string) => {
      setComment(text)
    },
    [setComment]
  )

  const handleSubmitComment = useCallback(() => {
    commitCreateComment({
      variables: {
        input: {
          replyId: id,
          content: comment,
        },
      },
    })
  }, [comment, commitCreateComment, id])

  if (!data.post) {
    return (
      <div>
        <Typography variant="h1" color="primary">
          Post Not Found
        </Typography>
      </div>
    )
  }

  return (
    <Box display="flex" flexDirection="column" className="fullscreen">
      <PostCommentsContainer flex={1}>
        <PostContent post={data.post} />
        <CommentsContainer>
          <PostComments post={data.post} />
        </CommentsContainer>
      </PostCommentsContainer>
      <ReplyContainer>
        <CreateCommentBox
          value={comment}
          onContentChange={handleCommentChange}
          onSubmit={handleSubmitComment}
        />
      </ReplyContainer>
    </Box>
  )
}

export default Post
