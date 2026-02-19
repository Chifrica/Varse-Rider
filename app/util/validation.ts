import * as Yup from 'yup'

export const KYCValidationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  phone: Yup.string()
    .min(10, 'Invalid phone number')
    .required('Phone number is required'),
  vehicleType: Yup.string().required('Select a vehicle type')
})
