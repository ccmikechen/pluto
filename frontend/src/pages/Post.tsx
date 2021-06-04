import graphql from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import { PostQuery as PostQueryType } from './__generated__/PostQuery.graphql'
import PostContent from '../wall/PostContent'
import { makeStyles, Typography } from '@material-ui/core'

const PostQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      ...PostContent_post
    }
  }
`

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  },
})

interface ParamTypes {
  id: string
}

function Post() {
  const classes = useStyles()
  const { id } = useParams<ParamTypes>()
  const data = useLazyLoadQuery<PostQueryType>(PostQuery, { id })

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
    <div className={classes.root}>
      <PostContent post={data.post} />
    </div>
  )
}

export default Post
