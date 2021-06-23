import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'
import { CardActionArea, Card, CardContent, Typography, styled, Box } from '@material-ui/core'
import { getTimeAgo } from '../app/time'
import React, { useCallback } from 'react'
import ReplyToLink from './ReplyToLink'

const StyledCard = styled(Card)({
  display: 'flex',
  background: '#40516E',
  marginBottom: '0.8rem',
  height: '7.2rem',
})

const ActionArea = styled(CardActionArea)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: 1,
})

const StyledCardContent = styled(CardContent)({
  flex: 0.8,
  paddingTop: 0,
  paddingBottom: 0,
})

const Timestamp = styled(Typography)({
  color: '#AAAAAA',
})

const userFragment = graphql`
  fragment PostListItem_post on Post {
    id
    content
    insertedAt
    replyTo {
      ...ReplyToLink_post
    }
  }
`

type Props = {
  post: PostListItem_post$key
  onPostClick: (id: string) => void
}

function PostListItem(props: Props) {
  const { onPostClick } = props
  const post = useFragment(userFragment, props.post)

  const handlePostClick = useCallback(() => {
    onPostClick(post.id)
  }, [onPostClick, post])

  return (
    <StyledCard key={post.id} data-testid="postCard">
      <ActionArea onClick={handlePostClick}>
        <Box flex={0.1} visibility={post.replyTo ? 'visible' : 'hidden'}>
          <ReplyToLink post={post.replyTo!} />
        </Box>
        <StyledCardContent>
          <Typography variant="h4" color="primary">
            {post.content}
          </Typography>
          <Timestamp variant="subtitle2">{getTimeAgo(new Date(post.insertedAt))}</Timestamp>
        </StyledCardContent>
        <Box flex={0.1} />
      </ActionArea>
    </StyledCard>
  )
}

export default PostListItem
