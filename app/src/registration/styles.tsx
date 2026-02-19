import { COLORS, RADIUS, SPACING } from '@/app/util/theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },

    flex: {
        flex: 1
    },

    /* ---------- Header ---------- */
    header: {
        alignItems: 'center',
        marginBottom: SPACING.lg
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: "#ff8800",
        textAlign: "center"
        // marginBottom: SPACING.xs

    },

    subTitle: {
        fontSize: 14,
        color: COLORS.muted,
        textAlign: 'center'
    },

    /* ---------- Tabs ---------- */
    tabContainer: {
        flexDirection: 'row',
        marginTop: SPACING.lg,
        borderBottomWidth: 1,
        borderColor: COLORS.border
    },

    tab: {
        flex: 1,
        paddingVertical: SPACING.sm,
        alignItems: 'center'
    },

    activeTab: {
        borderBottomWidth: 2,
        borderColor: COLORS.primary
    },

    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.muted
    },

    activeTabText: {
        color: COLORS.primary
    },

    /* ---------- Forms ---------- */
    form: {
        marginTop: SPACING.lg
    },

    inputGroup: {
        marginBottom: SPACING.lg
    },

    label: {
        fontSize: 14,
        color: COLORS.text,
        marginBottom: SPACING.xs,
        fontWeight: '500'
    },

    input: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        fontSize: 14,
        color: COLORS.text,
        backgroundColor: '#fff'
    },

    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: 'red'
    },

    /* ---------- Vehicle Type ---------- */
    vehicleContainer: {
        flexDirection: 'row',
        marginTop: SPACING.sm
    },

    vehicleOption: {
        flex: 1,
        padding: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: RADIUS.md,
        alignItems: 'center',
        marginRight: SPACING.sm
    },

    selectedVehicle: {
        borderColor: COLORS.primary,
        backgroundColor: '#EFF6FF'
    },

    vehicleText: {
        fontSize: 14,
        color: COLORS.text,
        fontWeight: 700
    },

    selectedVehicleText: {
        color: COLORS.muted,
        fontWeight: '500',
        textAlign: 'center'
    },

    /* ---------- Upload Boxes ---------- */
    uploadBox: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: COLORS.border,
        borderRadius: RADIUS.md,
        paddingVertical: SPACING.xl,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.md
    },

    uploadText: {
        fontSize: 14,
        color: COLORS.muted
    },

    imagePreview: {
        width: "100%",
        height: 100,
        borderRadius: 10,
        resizeMode: "contain"
    },

    /* ---------- Button ---------- */
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.md,
        borderRadius: RADIUS.md,
        marginTop: SPACING.xl,
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default styles
