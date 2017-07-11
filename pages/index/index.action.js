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

function showAutoLoading() {
  const {
    loading
  } = this.data;
  if(loading) return;
  this.setData({
    loading: true
  })
  setTimeout(()=>{
    this.setData({
      loading: false
    })
  },1000);
}

const action = {
  'openDropDown': openDropDown,
  'closeDropDown': closeDropDown,
  'toggleDropDown': toggleDropDown,
  'showAutoLoading': showAutoLoading
}

export default action;