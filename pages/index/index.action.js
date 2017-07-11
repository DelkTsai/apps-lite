/**
 * 同时具备action和reducer的功能
 */
function openDropDown() {
  this.setData({
    dropdownStatus: true
  })
  this.openMask();
}

function closeDropDown() {
  this.setData({
    dropdownStatus: false
  })
  this.closeMask();
}

function toggleDropDown() {
  const {
    dropdownStatus
  } = this.data;
  if (dropdownStatus) {
    this.closeMask();
  }else {
    this.openMask();
  }
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