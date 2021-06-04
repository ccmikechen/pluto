import graphql from 'babel-plugin-relay/macro'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getTimeAgo } from '../app/time'
import { useFragment } from 'react-relay'
import { PostContent_post$key } from './__generated__/PostContent_post.graphql'

const query = graphql`
  fragment PostContent_post on Post {
    content
    insertedAt
  }
`

const useStyles = makeStyles({
  card: {
    background: '#40516E',
    marginBottom: '0.8rem',
    contentVisibility: 'auto',
  },
  timestamp: {
    color: '#AAAAAA',
  },
})

type Props = {
  post: PostContent_post$key
}

function PostContent(props: Props) {
  const classes = useStyles()
  const post = useFragment(query, props.post)

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1" color="primary">
          {post.content}
        </Typography>
        <Typography variant="subtitle2" className={classes.timestamp}>
          {getTimeAgo(new Date('2020-10-10T00:00:00'))}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default PostContent
