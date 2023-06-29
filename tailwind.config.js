/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                pulse: 'pulse 4s cubic-bezier(1) infinite;',
            },
        },
    },
    plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'pulse': 'pulse 2s cubic-bezier( 0, 0.6, 0.8, 1) infinite;',
//       }
//     }
//   }
// }
