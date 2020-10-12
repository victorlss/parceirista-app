const colors = {
    business: {
        primary: "#A55EEA",
        primaryLight: "#C69CEF",
        primaryBackground: '#e9d4fd'
    },
    professional: {
        primary: "#FD9644",
        primaryLight: "#FFB67B",
        primaryBackground: '#ffe2cb'
    },
    type: (isBusiness) => isBusiness ? colors.business : colors.professional,
    text: "#FFB67B",
    textLight: "#A5B1C2",
    textDisabled: "#E6E6F0"
}

export default colors