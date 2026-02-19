import React, { useState, useRef } from 'react'
import {
    Animated,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
// import { Asset } from 'react-native-image-picker'
import { PickedImage } from '@/app/util/imagePicker'
import { KYCValidationSchema } from '@/app/util/validation'
import { pickImage } from '@/app/util/imagePicker'
import { COLORS, SPACING, RADIUS } from '@/app/util/theme'
import styles from './styles'

type TabType = 'basic' | 'documents'

const Registration = () => {
    const [activeTab, setActiveTab] = useState<TabType>('basic')
    const fadeAnim = useRef(new Animated.Value(1)).current

    const [ninImage, setNinImage] = useState<PickedImage | null>(null)
    const [profileImage, setProfileImage] = useState<PickedImage | null>(null)

    const switchTab = (tab: TabType) => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true
            })
        ]).start()
        setActiveTab(tab)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ padding: SPACING.lg }}>
                    <Text style={styles.title}>
                        KYC Set Up
                    </Text>
                    <Text style={styles.subTitle}>
                        You are just a step away from becoming a rider
                    </Text>

                    {/* Tabs */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SPACING.lg,
                            borderBottomWidth: 1,
                            borderColor: COLORS.border
                        }}
                    >
                        {(['basic', 'documents'] as TabType[]).map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                onPress={() => switchTab(tab)}
                                style={{
                                    flex: 1,
                                    paddingVertical: SPACING.sm,
                                    borderBottomWidth: activeTab === tab ? 2 : 0,
                                    borderColor: COLORS.primary
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color:
                                            activeTab === tab ? COLORS.primary : COLORS.muted,
                                        fontWeight: '600'
                                    }}
                                >
                                    {tab === 'basic' ? 'Basic Info' : 'Documents'}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Animated.View style={{ opacity: fadeAnim }}>
                        {activeTab === 'basic' && (
                            <Formik
                                initialValues={{
                                    fullName: '',
                                    phone: '',
                                    vehicleType: ''
                                }}
                                validationSchema={KYCValidationSchema}
                                onSubmit={() => switchTab('documents')}
                            >
                                {({
                                    handleChange,
                                    handleSubmit,
                                    values,
                                    errors,
                                    touched,
                                    setFieldValue
                                }) => (
                                    <>
                                        {(['fullName', 'phone'] as const).map((field) => (
                                            <View key={field} style={{ marginTop: SPACING.lg }}>
                                                <Text style={{ marginBottom: SPACING.xs, fontWeight: 700, color: COLORS.muted }}>
                                                    {field === 'fullName'
                                                        ? 'Full Name'
                                                        : 'Phone Number'}
                                                </Text>
                                                <TextInput
                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: COLORS.border,
                                                        borderRadius: RADIUS.md,
                                                        padding: SPACING.md
                                                    }}
                                                    keyboardType={
                                                        field === 'phone' ? 'phone-pad' : 'default'
                                                    }
                                                    onChangeText={handleChange(field)}
                                                    value={values[field]}
                                                    placeholder={
                                                        field === 'phone' ? 'Phone-number' : 'Full name'
                                                    }
                                                />
                                                {touched[field] && errors[field] && (
                                                    <Text style={{ color: 'red', marginTop: 4 }}>
                                                        {errors[field]}
                                                    </Text>
                                                )}
                                            </View>
                                        ))}

                                        {/* Vehicle Type */}
                                        <View style={{ marginTop: SPACING.lg }}>
                                            <Text style={{ fontWeight: 700, color: COLORS.muted }}>Vehicle Type</Text>
                                            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                                {(['motorcycle', 'bicycle'] as const).map((type) => (
                                                    <TouchableOpacity
                                                        key={type}
                                                        onPress={() =>
                                                            setFieldValue('vehicleType', type)
                                                        }
                                                        style={{
                                                            flex: 1,
                                                            padding: SPACING.md,
                                                            marginRight: 8,
                                                            borderRadius: RADIUS.md,
                                                            borderWidth: 1,
                                                            borderColor:
                                                                values.vehicleType === type
                                                                    ? COLORS.primary
                                                                    : COLORS.border,
                                                            backgroundColor:
                                                                values.vehicleType === type
                                                                    ? '#EFF6FF'
                                                                    : 'transparent'
                                                        }}
                                                    >
                                                        <Text style={{ textAlign: 'center' }}>
                                                            {type === 'motorcycle'
                                                                ? 'Motorcycle'
                                                                : 'Bicycle'}
                                                        </Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </View>

                                        <TouchableOpacity
                                            onPress={() => handleSubmit()}
                                            style={{
                                                backgroundColor: COLORS.primary,
                                                padding: SPACING.md,
                                                borderRadius: RADIUS.md,
                                                marginTop: SPACING.xl
                                            }}
                                        >
                                            <Text style={{ color: '#fff', textAlign: 'center' }}>
                                                Continue
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                )}
                            </Formik>
                        )}

                        {activeTab === 'documents' && (
                            <View style={{ marginTop: SPACING.lg }}>
                                {[
                                    { label: 'Upload NIN', setter: setNinImage, image: ninImage },
                                    {
                                        label: 'Upload Profile Picture',
                                        setter: setProfileImage,
                                        image: profileImage
                                    }
                                ].map((item) => (
                                    <TouchableOpacity
                                        key={item.label}
                                        onPress={async () => {
                                            const image = await pickImage(false)
                                            if (image) item.setter(image)
                                        }}
                                        style={{
                                            borderWidth: 1,
                                            borderColor: COLORS.border,
                                            borderRadius: RADIUS.md,
                                            padding: SPACING.lg,
                                            alignItems: 'center',
                                            marginBottom: SPACING.md
                                        }}
                                    >
                                        {item.image ? (
                                            <Image
                                                source={{ uri: item.image.uri }}
                                                style={{ width: 80, height: 80, borderRadius: 40 }}
                                            />
                                        ) : (
                                            <Text>{item.label}</Text>
                                        )}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </Animated.View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Registration
