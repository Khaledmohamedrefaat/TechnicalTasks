import React from 'react'

const InputForm = ({onChange, onSubmit}) => {
  return (
    <div class="pa4-l">
    <div class=" mw7 center pa4 br2 ba b--black-80">
      <div class="cf bn ma0 pa0">
        <legend class="pa0 b f2  mb3 black-80 center">Add New Task</legend>
        <div class="cf">
          <label class="clip" for="email-address">Task Name : </label>
          <input  class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" type="text"  id = "nameTextBox" onChange={onChange} />
          <button class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" onClick = {onSubmit} > Add Task!  </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InputForm;
