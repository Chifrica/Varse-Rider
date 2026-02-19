import * as ImagePicker from 'expo-image-picker'

export type PickedImage = ImagePicker.ImagePickerAsset

export const pickImage = async (
  fromCamera = false
): Promise<PickedImage | null> => {
  // Request permissions
  if (fromCamera) {
    const { status } =
      await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') return null
  } else {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') return null
  }

  const result = fromCamera
    ? await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8
      })
    : await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8
      })

  if (result.canceled) return null

  return result.assets[0]
}
