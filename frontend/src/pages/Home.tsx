import graphql from 'babel-plugin-relay/macro'
import { loadQuery, usePreloadedQuery } from 'react-relay'
import RelayEnvironment from '../relay/RelayEnvironment'
import Wall from '../wall/Wall'
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
})

const HomeQuery = graphql`
  query HomeQuery {
    ...Wall_root
  }
`

const preloadedQuery = loadQuery<HomeQueryType>(RelayEnvironment, HomeQuery, {})

function Home() {
  const classes = useStyles()
  const data = usePreloadedQuery(HomeQuery, preloadedQuery)

  return (
    <div className={classes.root}>
      <Wall root={data} />
    </div>
  )
}

export default Home
