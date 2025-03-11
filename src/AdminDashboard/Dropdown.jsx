import React from 'react'

const Dropdown = ({options}) => {
  return (
    <div>
        <select>
		{
			options.map((option, index) => {
				return <option key={index} value={option.value}>{option.displayValue}</option>
			})
		}
	</select>
    </div>
  )
}

export default Dropdown