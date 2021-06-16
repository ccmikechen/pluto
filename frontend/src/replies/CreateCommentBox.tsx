import { styled } from '@material-ui/core/styles'
import { useCallback, useState } from 'react'
import { Box, IconButton, TextField } from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply'

const BoxContainer = styled(Box)({
  backgroundColor: 'rgba(193,200,212, 0.1)',
  padding: '0 0.8rem',
  borderRadius: '0.3rem',
  marginLeft: '1rem',
})

const StyledReplyIcon = styled(ReplyIcon)({
  color: '#AAAAAA',
})

const StyledTextArea = styled(TextField)({ flex: 1, height: '100%' })

type Props = {
  value?: string
  onContentChange?: (text: string) => void
  onSubmit?: () => void
}

function CreateCommentBox(props: Props) {
  const {
    value = '',
    onContentChange = () => {
      return
    },
    onSubmit = () => {
      return
    },
  } = props

  const [content, setContent] = useState<string>(value)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContent(e.target.value)
      onContentChange(e.target.value)
    },
    [onContentChange]
  )

  const handleSubmit = useCallback(() => {
    if (content === '') {
      return
    }

    onSubmit()
    setContent('')
    onContentChange('')
  }, [onSubmit, content, setContent, onContentChange])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  return (
    <BoxContainer display="flex">
      <Box flex={1} display="flex" data-testid="createCommentBox">
        <StyledTextArea
          value={content}
          placeholder="Comment something"
          InputProps={{ disableUnderline: true, style: { flex: 1, fontSize: '1.3rem' } }}
          inputProps={{ maxLength: 500 }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Box>
      <Box>
        <IconButton onClick={handleSubmit} data-testid="submitCommentButton">
          <StyledReplyIcon />
        </IconButton>
      </Box>
    </BoxContainer>
  )
}

export default CreateCommentBox
