import colorNames from 'colornames'
const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <from onSubmit={(e) => e.preventDefault()}>
      <label htmlFor=''>Add Color Name:</label>
      <input
        autoFocus
        type='text'
        placeholder='Add color name'
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value)
          setHexValue(colorNames(e.target.value))
        }}
      />
      <button type='button' onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </from>
  )
}

export default Input
