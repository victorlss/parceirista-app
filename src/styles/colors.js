const colors = {
    business: {
        primary: "#A55EEA",
        primaryLight: "#C69CEF",
    },
    professional: {
        primary: "#FD9644",
        primaryLight: "#FFB67B",
    },
    type: (isBusiness) => isBusiness ? colors.business : colors.professional,
    text: "#FFB67B",
    textLight: "#A5B1C2",
    textDisabled: "#E6E6F0"
}

export default colors