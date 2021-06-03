import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'
import { makeStyles } from '@material-ui/core/styles'
import { CardActionArea, Card, CardContent, Typography } from '@material-ui/core'
import { getTimeAgo } from '../app/time'
import { useCallback } from 'react'

const useStyles = makeStyles({
  card: {
    background: '#40516E',
    marginBottom: '0.8rem',
    height: '6rem',
    contentVisibility: 'auto',
  },
  timestamp: {
    color: '#AAAAAA',
  },
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
  const classes = useStyles()

  const handlePostClick = useCallback(() => {
    onPostClick(post.id)
  }, [onPostClick, post])

  return (
    <div key={post.id} data-testid="postCard">
      <Card className={classes.card}>
        <CardActionArea onClick={handlePostClick}>
          <CardContent>
            <Typography variant="h4" color="primary">
              {post.content}
            </Typography>
            <Typography variant="subtitle2" className={classes.timestamp}>
              {getTimeAgo(new Date(post.insertedAt))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default PostListItem
