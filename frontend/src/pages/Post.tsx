import { useCallback, useState, useRef, useMemo } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useLazyLoadQuery, useSubscription } from 'react-relay'
import { useParams } from 'react-router-dom'
import { PostQuery as PostQueryType } from './__generated__/PostQuery.graphql'
import PostContent from '../wall/PostContent'
import { styled, Typography, Box } from '@material-ui/core'
import PostComments from '../replies/PostComments'
import CreateCommentBox from '../replies/CreateCommentBox'
import useCreateCommentMutation from '../replies/hooks/useCreateCommentMutation'
import { RecordSourceSelectorProxy } from 'relay-runtime'
import { PostSubscription as PostSubscriptionType } from './__generated__/PostSubscription.graphql'

const PostQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      ...PostContent_post
      ...PostComments_post
    }
  }
`

const PostSubscription = graphql`
  subscription PostSubscription($postId: ID!) {
    newComment(postId: $postId) {
      content
      insertedAt
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
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const config = useMemo(
    () => ({
      variables: { postId: id },
      subscription: PostSubscription,
      updater: (store: RecordSourceSelectorProxy) => {
        const postRecord = store.get(id)
        const newCommentRecord = store.getRootField('newComment')

        if (!newCommentRecord) {
          return
        }

        const commentRecords = postRecord?.getLinkedRecords('comments') || []
        postRecord?.setLinkedRecords([...commentRecords, newCommentRecord], 'comments')
      },
    }),
    [id]
  )

  useSubscription<PostSubscriptionType>(config)

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
      onCompleted: () => {
        scrollRef.current?.scrollIntoView(false)
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
        <CommentsContainer ref={scrollRef}>
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
