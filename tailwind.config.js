module.exports = {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.jsx',
      './resources/**/**/*.jsx',
      './resources/**/*.vue',
    ],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          fadeOut: {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.3s ease-out",
          fadeOut: "fadeOut 0.3s ease-in",
        },
        fontFamily: {
          irish: ['Irish Grover', 'cursive'],
        },
      },
      
    },
    plugins: [],
  };
  