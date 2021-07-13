import graphql from 'babel-plugin-relay/macro'
import { Link, styled } from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply'
import { useCallback } from 'react'
import { useFragment } from 'react-relay'
import { ReplyToLink_post$key } from './__generated__/ReplyToLink_post.graphql'
import { useHistory } from 'react-router-dom'

const StyledLink = styled(Link)({
  padding: '0px 16px',
  color: '#FFFFFF3A',
  display: 'flex',
  alignItems: 'center',
})

const userFragment = graphql`
  fragment ReplyToLink_post on Post {
    id
  }
`

type Props = {
  post: ReplyToLink_post$key | null
}

function ReplyToLink(props: Props) {
  const post = useFragment(userFragment, props.post)
  const history = useHistory()

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!post) {
        return
      }

      e.stopPropagation()
      history.push(`/post/${post.id}`)
    },
    [history, post]
  )

  return (
    <StyledLink onClick={handleClick}>
      <ReplyIcon />
      Reply to
    </StyledLink>
  )
}

export default ReplyToLink
