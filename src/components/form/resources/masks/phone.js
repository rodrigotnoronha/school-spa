export default [ // Mask to phone
  {
    mask: '####-####' // Default mask
  },
  { // Will mask for when you have 9 digits
    min: 9,
    max: 9,
    mask: '# ####-####'
  },
  { // Will mask for when you have 10 digits
    min: 10,
    max: 10,
    mask: '## ####-####'
  },
  { // Will mask for when you have 11 digits
    min: 11,
    max: 11,
    mask: '## # ####-####'
  }
]
