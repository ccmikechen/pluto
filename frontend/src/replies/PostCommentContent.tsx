import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostCommentContent_comment$key } from './__generated__/PostCommentContent_comment.graphql'
import { Card, CardContent, styled, Typography } from '@material-ui/core'
import { getTimeAgo } from '../app/time'

const userFragment = graphql`
  fragment PostCommentContent_comment on Post {
    content
    insertedAt
  }
`

type Props = {
  comment: PostCommentContent_comment$key
}

const StyledCard = styled(Card)({
  background: '#6A7484',
  marginBottom: '0.8rem',
  contentVisibility: 'auto',
})

const Content = styled(Typography)({
  fontSize: '1.4rem',
})

const Timestamp = styled(Typography)({
  color: '#CCCCCC',
  fontSize: '0.7rem',
})

function PostCommentContent(props: Props) {
  const { content, insertedAt } = useFragment(userFragment, props.comment)

  return (
    <div>
      <StyledCard>
        <CardContent>
          <Content variant="body1" color="primary" data-testid="postCommentContent">
            {content}
          </Content>
          <Timestamp variant="subtitle2">{getTimeAgo(new Date(insertedAt))}</Timestamp>
        </CardContent>
      </StyledCard>
    </div>
  )
}

export default PostCommentContent
