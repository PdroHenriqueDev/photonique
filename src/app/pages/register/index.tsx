import { Container } from './styles'
import PhotographerForm from '../../components/photographerForm'
import PhotographerService from '../../services/PhotographerService'
import { useContext, useState } from 'react'
import { SnackbarContext } from '../../context/snackBar'
import { PhotographerProps } from 'app/models/photographer/photographer.mode'

function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { showSnackbar } = useContext(SnackbarContext)

  async function handleSubmit(formData: PhotographerProps) {
    setIsSubmitting(true)
    try {
      const postRequest = await PhotographerService.createPhotographer(formData)
      const { message } = postRequest.data
      showSnackbar(message, 'success')
    } catch (error: any) {
      const { message } = error.response.data
      showSnackbar(message, 'danger')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container>
      <PhotographerForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </Container>
  )
}

export default Register
