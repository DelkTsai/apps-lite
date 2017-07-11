function openDropDown() {
  this.setData({
    dropdownStatus: true
  })
}

function closeDropDown() {
  this.setData({
    dropdownStatus: false
  })
}

function toggleDropDown() {
  const {
    dropdownStatus
  } = this.data;
  this.setData({
    dropdownStatus: !dropdownStatus
  })
}

const action = {
  'openDropDown': openDropDown,
  'closeDropDown': closeDropDown,
  'toggleDropDown': toggleDropDown
}

export default action;