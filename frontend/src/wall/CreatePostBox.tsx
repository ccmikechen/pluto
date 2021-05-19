import { Box, Button, TextField } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const BoxContainer = styled(Box)({
  backgroundColor: 'rgba(193,200,212, 0.1)',
  marginBottom: '0.4rem',
  padding: '0 0.8rem',
  height: '13rem',
  borderRadius: '0.3rem',
})

const StyledTextArea = styled(TextField)({ flex: 1, height: '100%' })

function CreatePostBox() {
  return (
    <BoxContainer display="flex" flexDirection="column">
      <Box flex={1} display="flex">
        <StyledTextArea
          multiline={true}
          rows={5}
          placeholder="Write something"
          InputProps={{ disableUnderline: true, style: { flex: 1, fontSize: '1.5rem' } }}
          inputProps={{ maxLength: 500 }}
        />
      </Box>
      <Box display="flex" flexDirection="row-reverse">
        <Button>Submit</Button>
      </Box>
    </BoxContainer>
  )
}

export default CreatePostBox
