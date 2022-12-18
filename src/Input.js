const Input = ({ colorValue, setColorValue }) => {
  return (
    <from onSubmit={(e) => e.preventDefault()}>
      <label htmlFor=''>Add Color Name:</label>
      <input
        autoFocus
        type='text'
        placeholder='Add color name'
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </from>
  )
}

export default Input
