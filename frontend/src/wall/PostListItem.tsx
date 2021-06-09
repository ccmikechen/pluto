import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'
import { CardActionArea, Card, CardContent, Typography, styled } from '@material-ui/core'
import { getTimeAgo } from '../app/time'
import { useCallback } from 'react'

const StyledCard = styled(Card)({
  background: '#40516E',
  marginBottom: '0.8rem',
  height: '6rem',
  contentVisibility: 'auto',
})

const Timestamp = styled(Typography)({
  color: '#AAAAAA',
})

const userFragment = graphql`
  fragment PostListItem_post on Post {
    id
    content
    insertedAt
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
    <div key={post.id} data-testid="postCard">
      <StyledCard>
        <CardActionArea onClick={handlePostClick}>
          <CardContent>
            <Typography variant="h4" color="primary">
              {post.content}
            </Typography>
            <Timestamp variant="subtitle2">{getTimeAgo(new Date(post.insertedAt))}</Timestamp>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </div>
  )
}

export default PostListItem
