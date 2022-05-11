import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => { 

  test('Should be able submit a feedback', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'Any',
      comment: 'Any comment',
      screenshot: 'data:image/png;base64, valid iamge'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  test('Should not be able to submit without type', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: '',
      comment: 'Any comment',
      screenshot: 'data:image/png;base64, valid image'
    })).rejects.toThrow()
  })

  test('Should not be able to submit without comment', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'Any',
      comment: '',
      screenshot: 'data:image/png;base64, valid image'
    })).rejects.toThrow()
  })

  test('Should not be able to submit feedback with an invalid feedback', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'Any',
      comment: 'Any comment',
      screenshot: 'invalid image'
    })).rejects.toThrow()
  })
})