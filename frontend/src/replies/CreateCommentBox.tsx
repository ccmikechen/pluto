import { styled } from '@material-ui/core/styles'
import { Box, TextField } from '@material-ui/core'

const BoxContainer = styled(Box)({
  backgroundColor: 'rgba(193,200,212, 0.1)',
  padding: '0 0.8rem',
  borderRadius: '0.3rem',
  marginLeft: '1rem',
})

const StyledTextArea = styled(TextField)({ flex: 1, height: '100%' })

function CreateCommentBox() {
  return (
    <BoxContainer display="flex" flexDirection="column">
      <Box flex={1} display="flex">
        <StyledTextArea
          placeholder="Comment something"
          InputProps={{ disableUnderline: true, style: { flex: 1, fontSize: '1.3rem' } }}
          inputProps={{ maxLength: 500 }}
        />
      </Box>
    </BoxContainer>
  )
}

export default CreateCommentBox
