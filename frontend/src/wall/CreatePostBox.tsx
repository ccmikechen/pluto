import graphql from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay'
import { useCallback, useState } from 'react'
import { styled } from '@material-ui/core/styles'
import { CreatePostBoxMutation } from './__generated__/CreatePostBoxMutation.graphql'
import { Box, Button, TextField } from '@material-ui/core'
import { RecordSourceSelectorProxy, ConnectionHandler } from 'relay-runtime'

const BoxContainer = styled(Box)({
  backgroundColor: 'rgba(193,200,212, 0.1)',
  marginBottom: '0.4rem',
  padding: '0 0.8rem',
  height: '13rem',
  borderRadius: '0.3rem',
})

const StyledTextArea = styled(TextField)({ flex: 1, height: '100%' })

const createPostMutation = graphql`
  mutation CreatePostBoxMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      result {
        content
        insertedAt
      }
    }
  }
`

function CreatePostBox() {
  const [content, setContent] = useState<string>('')
  const [commit, isProcessing] = useMutation<CreatePostBoxMutation>(createPostMutation)
  const handleSubmit = useCallback(() => {
    commit({
      variables: {
        input: {
          content,
        },
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const rootRecord = store.getRoot()
        const payload = store.getRootField('createPost')
        const connectionRecord = ConnectionHandler.getConnection(rootRecord, 'PostList_root_posts')!
        const newPostRecord = payload?.getLinkedRecord('result')!
        const newEdge = ConnectionHandler.createEdge(
          store,
          connectionRecord,
          newPostRecord,
          'PostEdge'
        )
        ConnectionHandler.insertEdgeBefore(connectionRecord, newEdge)
      },
    })
  }, [commit, content])

  const handleContentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContent(e.target.value)
    },
    [setContent]
  )

  return (
    <BoxContainer display="flex" flexDirection="column">
      <Box flex={1} display="flex" data-testid="createPostBox">
        <StyledTextArea
          multiline={true}
          rows={5}
          placeholder="Write something"
          InputProps={{ disableUnderline: true, style: { flex: 1, fontSize: '1.5rem' } }}
          inputProps={{ maxLength: 500 }}
          onChange={handleContentChange}
          value={content}
        />
      </Box>
      <Box display="flex" flexDirection="row-reverse">
        <Button data-testid="submitPostButton" onClick={handleSubmit} disabled={isProcessing}>
          Submit
        </Button>
      </Box>
    </BoxContainer>
  )
}

export default CreatePostBox
