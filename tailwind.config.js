/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        og_grad: "linear-gradient(86.52deg, #FF8A00 52.87%, rgba(255, 157, 43, 0) 133.77%)",
        og_lght: "rgba(255, 159, 15, 0.08)",
        og: "rgba(255, 159, 15, 0.91)",
        contrast: "rgba(49, 49, 49, 0.9)",
        lg_black: "rgba(0, 0, 0, 0.68)",
        text: "#1E1E1E",
        white: "#FFFFFF",
        myGray: "#DEDEDE",
        facebook: "#1877F2",
        twitter: "#1BA8FF",
        instagram: "#f09433",
        linkedin: "#018AD2"
      },
      fontFamily: {
        myCabin: ["Cabin"],
        plusJakarta: ["Plus Jakarta Sans"]
      },

    },
  },
  plugins: [],
}
