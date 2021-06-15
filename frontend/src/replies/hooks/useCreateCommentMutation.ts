import graphql from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay'
import { useCreateCommentMutation as useCreateCommentMutationType } from './__generated__/useCreateCommentMutation.graphql'

const mutation = graphql`
  mutation useCreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      result {
        content
        insertedAt
      }
    }
  }
`

function useCreateCommentMutation() {
  return useMutation<useCreateCommentMutationType>(mutation)
}

export default useCreateCommentMutation
