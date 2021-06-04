import graphql from 'babel-plugin-relay/macro'
import { loadQuery, usePreloadedQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import RelayEnvironment from '../relay/RelayEnvironment'
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

const preloadedQuery = (id: string) => loadQuery<PostQueryType>(RelayEnvironment, PostQuery, { id })

function Post() {
  const classes = useStyles()
  const { id } = useParams<ParamTypes>()
  const data = usePreloadedQuery(PostQuery, preloadedQuery(id))

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
