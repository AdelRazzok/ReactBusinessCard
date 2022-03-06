export default function DarkBtn() {
	function toggleDarkMode() {
		document.querySelector('.App').classList.toggle('dark')
	}

	return (
		<div className='DarkBtn'>
			<label className='switch'>
				<input type='checkbox' onChange={toggleDarkMode} />
				<span className='slider round'></span>
			</label>
		</div>
  	)
}